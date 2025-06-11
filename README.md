# แอปพยากรณ์อากาศมินิ

แอปพลิเคชันพยากรณ์อากาศขนาดเล็ก ที่สร้างด้วย Vue.js และ Vite ออกแบบมาเพื่อให้ข้อมูลสภาพอากาศที่รวดเร็วและใช้งานง่าย

## การติดตั้ง

### ข้อกำหนดเบื้องต้น

- Node.js (เวอร์ชัน 16 หรือสูงกว่า)
- npm หรือ yarn package manager

### ขั้นตอนการติดตั้ง

1. โคลนโปรเจคจากที่เก็บโค้ด:

   ```bash
   git clone <repository-url>
   cd mini-weather
   ```

2. ติดตั้ง dependencies:

   ```bash
   npm install
   ```

3. เริ่มเซิร์ฟเวอร์สำหรับพัฒนา:

   ```bash
   npm run dev
   ```

4. เปิดเบราว์เซอร์และไปที่ `http://localhost:3000`

## กระบวนการส่งมอบ / การ Deploy

### การพัฒนา

- รัน `npm run dev` เพื่อเริ่มเซิร์ฟเวอร์สำหรับพัฒนา
- แอปพลิเคชันจะโหลดใหม่โดยอัตโนมัติเมื่อมีการเปลี่ยนแปลง

### การสร้างไฟล์สำหรับใช้งานจริง

- รัน `npm run build` เพื่อสร้างไฟล์สำหรับใช้งานจริง
- ไฟล์ที่สร้างแล้วจะอยู่ในโฟลเดอร์ `dist/`
- รัน `npm run preview` เพื่อดูตัวอย่างแบบ production ในเครื่อง

### ตัวเลือกการ Deploy

- **Static Hosting**: Deploy โฟลเดอร์ `dist/` ไปยังบริการ static hosting (Netlify, Vercel, GitHub Pages)
- **CDN**: อัพโหลดไฟล์ที่สร้างแล้วไปยัง CDN เพื่อการกระจายทั่วโลก
- **Docker**: สามารถบรรจุใน container สำหรับ deploy บนแพลตฟอร์ม container orchestration

## โครงสร้างโปรเจค

```
mini-weather/
├── src/
│   ├── App.vue          # คอมโพเนนต์แอปพลิเคชันหลัก
│   ├── main.js          # จุดเริ่มต้นของแอปพลิเคชัน
│   └── style.css        # สไตล์ส่วนกลาง
├── index.html           # เทมเพลต HTML
├── vite.config.js       # การตั้งค่า Vite
├── .eslintrc.js         # การตั้งค่า ESLint
├── .prettierrc          # การตั้งค่า Prettier
├── .prettierignore      # ไฟล์ที่ไม่ต้องจัดรูปแบบ
├── package.json         # Dependencies และ scripts
├── package-lock.json    # ไฟล์ล็อค dependencies
├── .gitignore          # กฎการละเว้นไฟล์ Git
└── README.md           # เอกสารประกอบโปรเจค
```

## Framework / ไลบรารีที่ใช้

### Core Framework

- **Vue.js 3.5.16**: Progressive JavaScript framework สำหรับสร้างส่วนติดต่อผู้ใช้
- **Vite 6.3.5**: เครื่องมือ build และ development server ที่รวดเร็ว

### เครื่องมือพัฒนา

- **@vitejs/plugin-vue 5.2.4**: ปลั๊กอิน Vue อย่างเป็นทางการสำหรับ Vite
- **ESLint**: เครื่องมือตรวจสอบคุณภาพโค้ด JavaScript และ Vue
- **Prettier**: เครื่องมือจัดรูปแบบโค้ดอัตโนมัติ
- **ES Modules**: ระบบ module JavaScript สมัยใหม่

### การตั้งค่า Build

- **Vite**: ตั้งค่าพร้อมการสนับสนุนปลั๊กอิน Vue
- **Development Server**: ทำงานบนพอร์ต 3000 พร้อมเปิดเบราว์เซอร์อัตโนมัติ
- **Hot Module Replacement**: เปิดใช้งานเพื่อการพัฒนาที่รวดเร็ว

## ข้อมูลเซิร์ฟเวอร์

### Development Server

- **Port**: 3000 (สามารถตั้งค่าได้ใน `vite.config.js`)
- **Host**: localhost
- **Auto-open**: เบราว์เซอร์เปิดอัตโนมัติเมื่อเริ่มเซิร์ฟเวอร์
- **Hot Reload**: เปิดใช้งานสำหรับการอัพเดตแบบเรียลไทม์

### Production Server

- ไฟล์ static ที่เสิร์ฟจากโฟลเดอร์ `dist/`
- เข้ากันได้กับเว็บเซิร์ฟเวอร์ใดๆ (Apache, Nginx, ฯลฯ)
- เหมาะสำหรับการกระจายผ่าน CDN

## Continuous Integration

### Scripts ที่ใช้ได้

- `npm run dev`: เริ่ม development server
- `npm run build`: Build สำหรับ production
- `npm run preview`: ดูตัวอย่าง production build ในเครื่อง
- `npm run lint`: ตรวจสอบคุณภาพโค้ดด้วย ESLint
- `npm run lint:fix`: แก้ไขปัญหา linting อัตโนมัติ
- `npm run format`: จัดรูปแบบโค้ดด้วย Prettier
- `npm run format:check`: ตรวจสอบการจัดรูปแบบโค้ด
- `npm test`: รันเทสต์ (ยังไม่ได้ตั้งค่า)

### แนะนำ CI/CD Pipeline

1. **Code Quality**: ตรวจสอบคุณภาพโค้ดด้วย ESLint และจัดรูปแบบด้วย Prettier (พร้อมใช้งาน)
2. **Testing**: Unit tests ด้วย Vitest (แนะนำ)
3. **Build**: การ build production อัตโนมัติเมื่อมี push
4. **Deploy**: การ deploy อัตโนมัติไปยัง staging/production environments

### Code Quality และ Standards

โปรเจคนี้ได้ตั้งค่า:

- **ESLint** สำหรับตรวจสอบคุณภาพโค้ด Vue.js และ JavaScript
- **Prettier** สำหรับจัดรูปแบบโค้ดให้สม่ำเสมอ
- การตั้งค่า ESLint รองรับ Vue 3 และ ES2021
- กฎการจัดรูปแบบโค้ดที่เหมาะสมสำหรับการพัฒนาเป็นทีม

คำแนะนำ:

- รัน `npm run lint` ก่อน commit โค้ด
- ตั้งค่า editor ให้ format โค้ดด้วย Prettier เมื่อบันทึกไฟล์
- ใช้ `npm run lint:fix` เพื่อแก้ไขปัญหาง่ายๆ อัตโนมัติ

## ข้อมูลอื่นๆ

### หมายเหตุการพัฒนา

- สร้างด้วย JavaScript สมัยใหม่ (ES6+)
- ใช้รูปแบบ Vue.js 3 Composition API
- หลักการออกแบบ responsive
- สถาปัตยกรรมคอมโพเนนต์แบบโมดูล

### การปรับปรุงในอนาคต

- การรวม Weather API
- ข้อมูลสภาพอากาศตามตำแหน่ง
- การพยากรณ์อากาศและข้อมูลประวัติศาสตร์
- การออกแบบ responsive บนมือถือ
- คุณสมบัติ Progressive Web App (PWA)

### การมีส่วนร่วม

1. Fork repository
2. สร้าง feature branch
3. ทำการเปลี่ยนแปลง
4. ส่ง pull request

### ใบอนุญาต

ISC License - ดูรายละเอียดใน package.json

### การสนับสนุน

สำหรับปัญหาและคำถาม กรุณาสร้าง issue ใน repository ของโปรเจค
