# File Upload Limits - Community Posts

## Current Limits

| Limit Type | Value | Reason |
|------------|-------|--------|
| **Max File Size** | No limit per file | Students need to share large lecture PDFs/videos |
| **Max Files** | 5 files per post | Prevent spam and maintain performance |
| **Max Total Size** | 150 MB per post | Balanced for large educational content |

## Firebase Storage Free Tier

- **Storage**: 5 GB total
- **Downloads**: 1 GB/day
- **Uploads**: 20,000/day

## File Types Supported

- **Images**: All image formats (jpg, png, gif, etc.)
- **Documents**: PDF files
- **Videos**: All video formats (mp4, mov, etc.)

## User Experience

### Validation Messages

When users try to upload files that exceed limits, they'll see:

1. **Too many files**:
   ```
   Maximum 5 files allowed per post. Currently selected: X
   ```

2. **Total size exceeded**:
   ```
   Total upload size cannot exceed 150 MB.

   Current files: 50 MB
   New files: 120 MB
   Total: 170 MB
   ```

### Upload Hints

Users see this hint below the file selection buttons:
```
Max 5 files • 150 MB total per post
```

## Implementation

All validation happens client-side in `CommunityPage.tsx` before files are uploaded to Firebase Storage:

```typescript
const MAX_FILES = 5 // Maximum 5 files per post
const MAX_TOTAL_SIZE = 150 * 1024 * 1024 // 150 MB total per post (no per-file limit)
```

**No per-file size limit** - Students can upload large lecture PDFs (100+ MB) as long as the total doesn't exceed 150 MB.

## Future Considerations

If usage grows and free tier limits are exceeded:

1. **Upgrade to Blaze Plan** (pay-as-you-go)
   - Storage: $0.026/GB/month
   - Downloads: $0.12/GB
   - Uploads: Free

2. **Optimize existing files**:
   - Compress images before upload
   - Convert videos to more efficient formats
   - Archive old attachments

3. **Alternative storage**:
   - Use CDN for static content
   - Self-hosted storage solution
   - Third-party storage services

## CORS Configuration Required

For file uploads to work on deployed sites, Firebase Storage CORS must be configured:

**File**: `cors.json` (in project root)
**Deploy**: `gsutil cors set cors.json gs://medlearn-dev.appspot.com`

See `SESSION_HANDOFF_2025-11-20.md` for detailed CORS setup instructions.
