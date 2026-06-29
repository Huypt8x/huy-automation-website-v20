# HUY Automation Website — Hướng dẫn bổ sung nội dung trước khi lên GitHub

File này chỉ để anh quản trị nội bộ. Nội dung này **không hiển thị trên website public**.

## 1. Thay ảnh founder

Đặt ảnh tại:

```text
public/images/founder.png
```

Giữ nguyên tên `founder.png` để website tự nhận.

## 2. Thêm screenshot workflow WF00-WF09

Mỗi workflow detail page đang đọc ảnh theo đúng tên:

```text
public/media/workflows/wf00.png
public/media/workflows/wf01.png
public/media/workflows/wf02.png
public/media/workflows/wf03.png
public/media/workflows/wf04.png
public/media/workflows/wf05.png
public/media/workflows/wf06.png
public/media/workflows/wf07.png
public/media/workflows/wf08.png
public/media/workflows/wf09.png
```

Anh chỉ cần xuất screenshot n8n thật rồi chép đè vào đúng file tương ứng.

Kích thước khuyên dùng:

```text
1400 x 850 px
hoặc 16:9 / gần 16:10
PNG hoặc JPG đều được, nhưng nếu đổi sang JPG thì phải sửa imageUrl trong src/data/site.ts
```

## 3. Thêm video demo workflow

Mở:

```text
src/data/site.ts
```

Tìm workflow cần sửa, ví dụ WF03:

```ts
{ id: 'WF03', ... videoUrl: '' }
```

Dán link YouTube/Vimeo vào:

```ts
videoUrl: 'https://youtube.com/...'
```

## 4. Sửa text mô tả workflow

Cũng trong:

```text
src/data/site.ts
```

Các trường thường sửa:

```ts
purpose
input
output
tools
lessons
offer
```

## 5. Thêm ảnh nhân viên AI

Đặt ảnh tại:

```text
public/media/employees/ten-nhan-vien.png
```

Ví dụ:

```text
public/media/employees/que-anh.png
```

Sau đó sửa employee tương ứng trong `src/data/site.ts`:

```ts
avatarUrl: '/media/employees/que-anh.png'
```

## 6. Thêm tài nguyên bán hàng

Đặt PDF/checklist/resource tại:

```text
public/media/resources
```

Ví dụ:

```text
public/media/resources/ai-company-os-map.pdf
```

## 7. Test trước khi đẩy GitHub

```powershell
npm run dev
```

Mở:

```text
http://localhost:3000
```

Kiểm tra nhanh:

```text
/automation/wf00 → /automation/wf09
/employees/que-anh
/systems/g1
/consultation
```

Sau khi ổn:

```powershell
npm run build
```

Nếu build không lỗi thì đẩy GitHub / Cloudflare Pages.
