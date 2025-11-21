import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Users, UserCheck, UserX, Ban, CheckCircle, Calendar, MessageSquare, Shield, Trash2, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { db } from '@/lib/firebase'
import { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy, Timestamp, where } from 'firebase/firestore'

interface UserData {
  uid: string
  email: string
  name: string
  avatar: string
  role: 'user' | 'moderator' | 'admin' | 'superadmin'
  year?: number
  isBanned?: boolean
  createdAt: Timestamp
  lastLogin: Timestamp
  postCount?: number
}

export function ManageUsers() {
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(true)
  const [banning, setBanning] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [stats, setStats] = useState({
    total: 0,
    activeToday: 0,
    newThisWeek: 0,
    banned: 0
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      if (!db) {
        console.error('Firestore not initialized')
        return
      }

      // Fetch all users
      const usersRef = collection(db, 'users')
      const q = query(usersRef, orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)

      const fetchedUsers: UserData[] = snapshot.docs.map(docSnap => ({
        uid: docSnap.id,
        ...docSnap.data()
      } as UserData))

      setUsers(fetchedUsers)

      // Calculate stats
      const now = Date.now()
      const oneDayAgo = now - 24 * 60 * 60 * 1000
      const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000

      setStats({
        total: fetchedUsers.length,
        activeToday: fetchedUsers.filter(u => u.lastLogin?.seconds * 1000 > oneDayAgo).length,
        newThisWeek: fetchedUsers.filter(u => u.createdAt?.seconds * 1000 > oneWeekAgo).length,
        banned: fetchedUsers.filter(u => u.isBanned).length
      })
    } catch (error) {
      console.error('Error fetching users:', error)
      alert('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  const handleBanUser = async (userId: string, currentlyBanned: boolean) => {
    if (!confirm(`Are you sure you want to ${currentlyBanned ? 'unban' : 'ban'} this user?`)) return

    if (!db) {
      console.error('Firestore not initialized')
      return
    }

    setBanning(userId)
    try {
      await updateDoc(doc(db, 'users', userId), {
        isBanned: !currentlyBanned
      })

      // Update local state
      setUsers(prev => prev.map(u =>
        u.uid === userId ? { ...u, isBanned: !currentlyBanned } : u
      ))

      // Update stats
      setStats(prev => ({
        ...prev,
        banned: currentlyBanned ? prev.banned - 1 : prev.banned + 1
      }))
    } catch (error) {
      console.error('Error updating user ban status:', error)
      alert('Failed to update user ban status')
    } finally {
      setBanning(null)
    }
  }

  const handleDeleteUser = async (userId: string, userName: string, userEmail: string) => {
    if (!confirm(`⚠️ Are you sure you want to DELETE this user's data?\n\nUser: ${userName} (${userEmail})\n\nThis will:\n✓ Remove their Firestore document\n✓ Remove them from this admin panel\n\n⚠️ NOTE: If this user still exists in Firebase Authentication, they can log back in and their profile will be recreated. To permanently delete a user, you must ALSO delete them from Firebase Console > Authentication.`)) return

    if (!db) {
      console.error('Firestore not initialized')
      return
    }

    setDeleting(userId)
    try {
      // Delete user document from Firestore
      await deleteDoc(doc(db, 'users', userId))

      // Update local state - remove user from list
      setUsers(prev => prev.filter(u => u.uid !== userId))

      // Update stats
      setStats(prev => ({
        ...prev,
        total: prev.total - 1
      }))

      alert(`✓ Successfully deleted user data for ${userName}`)
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('Failed to delete user data. Please try again.')
    } finally {
      setDeleting(null)
    }
  }

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return 'Never'
    const date = new Date(timestamp.seconds * 1000)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`
    return date.toLocaleDateString()
  }

  const getRoleBadge = (role: string) => {
    const badges = {
      superadmin: { text: 'Super Admin', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200' },
      admin: { text: 'Admin', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' },
      moderator: { text: 'Moderator', color: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200' },
      user: { text: 'User', color: 'bg-muted text-muted-foreground' }
    }
    const badge = badges[role as keyof typeof badges] || badges.user
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
        {badge.text}
      </span>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-card border border-border rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 bg-card border border-border rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-950 rounded-lg">
              <UserCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Today</p>
              <p className="text-2xl font-bold">{stats.activeToday}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 bg-card border border-border rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-950 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">New This Week</p>
              <p className="text-2xl font-bold">{stats.newThisWeek}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-card border border-border rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-950 rounded-lg">
              <UserX className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Banned Users</p>
              <p className="text-2xl font-bold">{stats.banned}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Users Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">All Users</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Manage user accounts and permissions
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchUsers}
            disabled={loading}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user, index) => (
                <motion.tr
                  key={user.uid}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-muted/20 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold text-white overflow-hidden flex-shrink-0">
                        {user.avatar.startsWith('http') ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          user.avatar
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {user.year ? `Year ${user.year}` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(user.lastLogin)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.isBanned ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200">
                        <UserX className="w-3 h-3" />
                        Banned
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200">
                        <CheckCircle className="w-3 h-3" />
                        Active
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      {user.role !== 'superadmin' && (
                        <>
                          <Button
                            variant={user.isBanned ? "outline" : "destructive"}
                            size="sm"
                            onClick={() => handleBanUser(user.uid, user.isBanned || false)}
                            disabled={banning === user.uid || deleting === user.uid}
                            className="text-xs"
                          >
                            {banning === user.uid ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : user.isBanned ? (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Unban
                              </>
                            ) : (
                              <>
                                <Ban className="w-3 h-3 mr-1" />
                                Ban
                              </>
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteUser(user.uid, user.name, user.email)}
                            disabled={deleting === user.uid || banning === user.uid}
                            className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950"
                          >
                            {deleting === user.uid ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <>
                                <Trash2 className="w-3 h-3 mr-1" />
                                Delete
                              </>
                            )}
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
