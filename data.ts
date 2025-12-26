
import { SlideData } from './types';

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'cover',
    title: { vi: 'HỒ SƠ NĂNG LỰC', en: 'COMPANY PROFILE' },
    subtitle: { vi: 'CÔNG TY CỔ PHẦN DƯỢC PHẨM FREMED', en: 'FREMED PHARMACEUTICAL JOINT STOCK COMPANY' },
    image: 'https://images.unsplash.com/photo-1579165466541-74e214958aa4?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 2,
    type: 'overlap',
    title: { vi: '2. GIỚI THIỆU CHUNG (INTRODUCTION)', en: '2. INTRODUCTION' },
    content: [
      { vi: 'Năm 2006, ông Trang Văn Tốt sáng lập Công ty Cổ phần Dược phẩm Glomed.', en: 'In 2006, Mr. Trang Văn Tốt founded Glomed Pharmaceutical Joint Stock Company.' },
      { vi: 'Sau thương vụ chuyển nhượng thành công Glomed cho Tập đoàn Abbott vào năm 2016, với tâm huyết không ngừng nghỉ dành cho ngành dược, ông tiếp tục thành lập Công ty Cổ phần Dược phẩm Fremed vào năm 2018.', en: 'Following the successful acquisition of Glomed by Abbott Group in 2016, he continued his commitment to the pharmaceutical sector by establishing Fremed Pharmaceutical Joint Stock Company in 2018.' }
    ],
    image: 'https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    type: 'standard',
    title: { vi: '2. GIỚI THIỆU CHUNG (INTRODUCTION)', en: '2. INTRODUCTION' },
    content: [
      { vi: 'Nhà máy sản xuất của Fremed chính thức khánh thành vào tháng 11/2021 và vinh dự đạt chứng nhận WHO-GMP do Bộ Y tế Việt Nam cấp vào tháng 03/2022.', en: 'Fremed’s manufacturing facility was officially inaugurated in November 2021 and was awarded the WHO-GMP certification by Vietnam’s Ministry of Health in March 2022.' },
      { vi: 'Năm 2025 đánh dấu một cột mốc lịch sử quan trọng: Vào ngày 01/10, Fremed tự hào đón nhận chứng nhận EU-GMP từ cơ quan quản lý dược phẩm Bồ Đào Nha (INFARMED).', en: 'In 2025, Fremed achieved a historic milestone. On October 1st, the company proudly received EU-GMP certification from INFARMED (Portugal).' }
    ],
    highlight: { vi: 'EU-GMP 01/10/2025', en: 'EU-GMP Certification 01/10/2025' },
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    type: 'overlap',
    title: { vi: '2. GIỚI THIỆU CHUNG (INTRODUCTION)', en: '2. INTRODUCTION' },
    content: [
      { vi: 'Nhà máy sản xuất hiện đại của chúng tôi tọa lạc tại vị trí chiến lược trong Khu công nghiệp Hiệp Phước, Huyện Nhà Bè, TP. Hồ Chí Minh, với tổng diện tích lên đến 20.000 m².', en: 'Our state-of-the-art production plant is strategically located in Hiệp Phước Industrial Park, Nhà Bè District, Ho Chi Minh City, spanning a total area of 20,000 m².' },
      { vi: 'Với sứ mệnh cốt lõi là bảo vệ và nâng cao sức khỏe cộng đồng, Fremed cam kết đầu tư liên tục vào công nghệ tiên tiến, nghiên cứu và phát triển các sản phẩm dược phẩm chất lượng cao với chi phí hợp lý.', en: 'Guided by the core mission of safeguarding and enhancing public health, Fremed is dedicated to continuous investment in advanced technology and high-quality, affordable pharmaceutical products.' }
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 5,
    type: 'timeline',
    title: { vi: '3. LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN', en: '3. HISTORY' },
    timelineData: [
      { year: '1995', content: { vi: 'Thành lập Công ty Cẩm Tú, tập trung phân phối các sản phẩm từ Châu Âu.', en: 'Cẩm Tú Pharmaceutical Company was established with a focus on distributing products from Europe.' } },
      { year: '2006', content: { vi: 'Nhà máy Dược phẩm Glomed chính thức đi vào hoạt động với dây chuyền hiện đại.', en: 'Glomed Pharmaceutical officially commissioned its manufacturing facility with state-of-the-art production lines.' } }
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-027eece9615b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 6,
    type: 'timeline',
    title: { vi: '3. LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN', en: '3. HISTORY' },
    timelineData: [
      { year: '2013', content: { vi: 'Glomed xếp hạng 60 trong Top 500 Doanh nghiệp Tăng trưởng nhanh nhất (Fast 500).', en: 'Glomed was ranked 60th in the Top 500 Fastest-Growing Companies in Vietnam (Fast 500).' } },
      { year: '2016', content: { vi: 'Tập đoàn Abbott hoàn tất thương vụ mua lại 100% cổ phần của Glomed.', en: 'The Abbott Group completed the acquisition of 100% of the shares in Glomed.' } }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 7,
    type: 'timeline',
    title: { vi: '3. LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN', en: '3. HISTORY' },
    timelineData: [
      { year: '2018', content: { vi: 'Công ty Cổ phần Dược phẩm Fremed được thành lập, định hướng tiêu chuẩn EU-GMP.', en: 'Fremed Pharmaceutical Joint Stock Company was established, oriented towards EU-GMP standards.' } },
      { year: '2022', content: { vi: 'Tháng 3/2022, Fremed chính thức nhận chứng nhận WHO-GMP từ Bộ Y tế.', en: 'In March 2022, Fremed officially received the WHO-GMP certificate from the Ministry of Health.' } }
    ],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 8,
    type: 'timeline',
    title: { vi: '3. LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN', en: '3. HISTORY' },
    timelineData: [
      { year: '2025', content: { vi: 'Ngày 01/10, công ty tự hào nhận chứng nhận EU-GMP từ INFARMED (Bồ Đào Nha).', en: 'On October 1st, the company proudly received EU-GMP certification from INFARMED (Portugal).' } }
    ],
    highlight: { vi: 'Mốc Son EU-GMP', en: 'EU-GMP: A Golden Milestone' },
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 9,
    type: 'quote',
    title: { vi: '4. TẦM NHÌN (VISION)', en: '4. VISION' },
    content: [
      { vi: 'Fremed khát vọng trở thành biểu tượng của ngành công nghiệp dược phẩm Việt Nam, cung cấp thuốc chất lượng với giá hợp lý.', en: 'Fremed aspires to become an icon of the Vietnamese pharmaceutical industry, providing high-quality medicines at affordable prices.' },
      { vi: 'Chúng tôi mang đến các liệu pháp điều trị tiên tiến đạt chuẩn quốc tế, giúp bệnh nhân dễ dàng tiếp cận các giải pháp hiệu quả.', en: 'We deliver advanced treatment therapies that meet international standards, enabling patients to easily access effective healthcare solutions.' },
      { vi: 'Phấn đấu trở thành một trong Top 5 công ty dược phẩm hàng đầu Việt Nam.', en: 'We aim to become one of the top 5 leading pharmaceutical companies in Vietnam.' }
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 10,
    type: 'standard',
    title: { vi: '4. SỨ MỆNH (MISSION)', en: '4. MISSION' },
    content: [
      { vi: 'Kiến tạo môi trường làm việc khuyến khích sự sáng tạo, đổi mới và mang lại cơ hội phát triển toàn diện.', en: 'We believe that creating a work environment that encourages creativity and innovation is key.' },
      { vi: 'Fremed xây dựng danh mục sản phẩm đa dạng, thúc đẩy hợp tác nghiên cứu và đối tác chiến lược bền vững.', en: 'Fremed realizes its vision by building a diverse product portfolio and establishing sustainable strategic partnerships.' }
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 11,
    type: 'grid',
    title: { vi: '4. GIÁ TRỊ CỐT LÕI (CORE VALUES)', en: '4. CORE VALUES' },
    gridData: [
      { content: { vi: 'Tuân thủ các chuẩn mực đạo đức cao nhất.', en: 'Always adhere to the highest ethical standards.' } },
      { content: { vi: 'Hành động chính trực trong mọi hoạt động.', en: 'Act with integrity in all activities.' } },
      { content: { vi: 'Đóng góp tích cực vào sự phát triển cộng đồng.', en: 'Contribute positively to community development.' } },
      { content: { vi: 'Chịu trách nhiệm cho mọi quyết định.', en: 'Take responsibility for all decisions and actions.' } },
      { content: { vi: 'Không ngừng đổi mới mang lại giá trị tối ưu.', en: 'Continuously innovate to deliver optimal value.' } },
      { content: { vi: 'Ghi nhận và tôn vinh tinh thần đồng đội.', en: 'Recognize, honor, and promote team spirit.' } },
      { content: { vi: 'Tạo cơ hội phát triển bình đẳng.', en: 'Create equal development opportunities for all.' } }
    ]
  },
  {
    id: 12,
    type: 'grid',
    title: { vi: '5. VĂN HÓA DOANH NGHIỆP (CULTURE)', en: '5. CULTURE' },
    gridData: [
      { title: { vi: 'TÔN TRỌNG', en: 'RESPECT' }, content: { vi: 'Tôn trọng khách hàng, đối tác và đồng nghiệp.', en: 'Respect customers, partners, and colleagues.' } },
      { title: { vi: 'CHÍNH TRỰC', en: 'INTEGRITY' }, content: { vi: 'Đề cao sự chính trực, đạo đức và trung thực.', en: 'Uphold the highest standards of integrity and ethics.' } },
      { title: { vi: 'ĐỔI MỚI', en: 'INNOVATION' }, content: { vi: 'Khuyến khích sự sáng tạo và làm việc nhóm.', en: 'Encourage creativity and maximize teamwork.' } },
      { title: { vi: 'CHẤT LƯỢNG', en: 'QUALITY' }, content: { vi: 'Nỗ lực tạo ra sản phẩm ưu việt.', en: 'Relentlessly strive to create superior products.' } },
      { title: { vi: 'BẢO MẬT', en: 'CONFIDENTIALITY' }, content: { vi: 'Bảo vệ tuyệt đối dữ liệu và thông tin.', en: 'Commit to absolute protection of data and information.' } }
    ]
  },
  {
    id: 13,
    type: 'overlap',
    title: { vi: '6. LỢI THẾ CẠNH TRANH', en: '6. COMPETITIVE ADVANTAGES' },
    content: [
      { vi: 'Chiến lược tối ưu hóa chi phí nhờ lợi thế quy mô.', en: 'Strategy to optimize costs thanks to economies of scale.' },
      { vi: 'Hệ thống chuỗi cung ứng hiệu quả, giao hàng nhanh chóng.', en: 'Efficient supply chain system, ensuring fast delivery.' },
      { vi: 'Ứng dụng công nghệ tiên tiến mang lại trải nghiệm tốt nhất.', en: 'Apply advanced technology to bring the best experience.' },
      { vi: 'Xây dựng nhận diện thương hiệu mạnh mẽ, uy tín.', en: 'Build a strong, reputable, and trusted brand identity.' },
      { vi: 'Tạo ra sự khác biệt hóa cho từng dòng sản phẩm.', en: 'Create differentiation for each product line.' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 14,
    type: 'stats',
    title: { vi: '7. MỤC TIÊU & CHIẾN LƯỢC', en: '7. GOALS & STRATEGIES' },
    subtitle: { vi: 'NĂNG LỰC SẢN XUẤT (TỐI ĐA)', en: 'CAPACITY (OPERATIONAL PEAK)' },
    statsData: [
      { label: { vi: 'Viên nén (Tablets)', en: 'Tablets' }, value: '500M' },
      { label: { vi: 'Viên nang (Capsules)', en: 'Capsules' }, value: '63M' }
    ],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 15,
    type: 'standard',
    title: { vi: '7. MỤC TIÊU & CHIẾN LƯỢC KINH DOANH', en: '7. GOALS & STRATEGIES' },
    content: [
      { vi: 'Tăng trưởng bền vững: Mở rộng danh mục & Quy mô kinh doanh.', en: 'Sustainable growth: Expand product portfolio & Business scale.' },
      { vi: 'Hợp tác quốc tế: Hợp tác với các đối tác toàn cầu.', en: 'International cooperation: Partner with global entities.' },
      { vi: 'Mở rộng thị trường: Thâm nhập ASEAN và các thị trường trọng điểm năm 2026.', en: 'Market expansion: Step into ASEAN and other key markets by 2026.' }
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 16,
    type: 'roadmap',
    title: { vi: '8. LỘ TRÌNH PHÁT TRIỂN (ROADMAP)', en: '8. ROADMAP' },
    timelineData: [
      { year: '2027 (Phase 2)', content: { vi: 'Tập trung sản xuất các dòng sản phẩm chuyên khoa/đặc trị.', en: 'Focus on producing specialty product lines.' } },
      { year: '2028 (Phase 3)', content: { vi: 'Phát triển và sản xuất các dạng thuốc tiêm vô trùng.', en: 'Develop and produce sterile injectable drug forms.' } }
    ],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 17,
    type: 'leadership',
    title: { vi: '9. ĐỘI NGŨ LÃNH ĐẠO CHỦ CHỐT', en: '9. KEY LEADERSHIP TEAM' },
    leadershipData: [
      { name: 'Trang Văn Tốt', role: { vi: 'Chủ tịch HĐQT kiêm TGĐ', en: 'Chairman & CEO' }, description: { vi: 'Nhà sáng lập Fremed, 30+ năm kinh nghiệm trong ngành dược.', en: 'Founder of Fremed with over 30 years of dedication in pharmaceuticals.' } },
      { name: 'Trang Văn Tý', role: { vi: 'Phó Tổng Giám đốc', en: 'Deputy General Director' }, description: { vi: 'Điều hành hành chính tổng hợp, 25 năm kinh nghiệm.', en: 'Responsible for overall administrative operations with 25 years of experience.' } },
      { name: 'Trang Cẩm Tú', role: { vi: 'Phó Tổng Giám đốc', en: 'Deputy General Director' }, description: { vi: 'Quản lý Cung ứng và Hậu cần (Logistics), 15 năm kinh nghiệm.', en: 'Responsible for Procurement and Logistics with 15 years of experience.' } },
      { name: 'TS. Lê Tuấn Tú', role: { vi: 'Giám đốc Nhà máy', en: 'Factory Director' }, description: { vi: '20 năm kinh nghiệm trong công nghệ dược phẩm & quản lý sản xuất.', en: '20 years of experience in modern pharmaceutical technology & production.' } }
    ]
  },
  {
    id: 18,
    type: 'grid',
    title: { vi: '10. THẾ MẠNH (STRENGTHS)', en: '10. STRENGTHS' },
    gridData: [
      { title: { vi: 'KINH NGHIỆM', en: 'EXPERIENCE' }, content: { vi: '36 năm phân phối & 10 năm sản xuất thuốc tiêm.', en: '36 years of distribution and 10 years of sterile production.' } },
      { title: { vi: 'ĐỐI TÁC', en: 'PARTNERS' }, content: { vi: 'Quan hệ bền vững với 16.000+ nhà thuốc.', en: 'Strong partnerships with over 16,000 pharmacies.' } },
      { title: { vi: 'NHÂN SỰ', en: 'HUMAN RESOURCES' }, content: { vi: 'Đội ngũ chuyên gia chuyên nghiệp, giàu kinh nghiệm.', en: 'A team of professional experts and specialized personnel.' } },
      { title: { vi: 'NĂNG LỰC', en: 'CAPACITY' }, content: { vi: 'Vượt trội trong kênh ETC, OTC và phân phối.', en: 'Strong capabilities in hospital business, retail and distribution.' } },
      { title: { vi: 'HẠ TẦNG', en: 'INFRASTRUCTURE' }, content: { vi: 'Cơ sở vật chất hiện đại, thiết bị tiên tiến.', en: 'Modern facilities with advanced production and testing equipment.' } }
    ]
  },
  {
    id: 19,
    type: 'overlap',
    title: { vi: '11. CƠ SỞ VẬT CHẤT & HẠ TẦNG', en: '11. PHYSICAL INFRASTRUCTURE' },
    subtitle: { vi: 'Phòng QC Lab & R&D', en: 'Quality Control Laboratory' },
    content: [
      { vi: 'Sử dụng thiết bị từ các thương hiệu hàng đầu: ACG, Kanbert, Quantachrome, Malvern.', en: 'R&D and testing machines from leading brands: ACG, Kanbert, Quantachrome, Malvern.' },
      { vi: 'Trang bị Máy đo độ hòa tan (Dissolution Tester) và HPLC.', en: 'Equipped with Dissolution Testers and HPLC systems.' }
    ],
    image: 'https://images.unsplash.com/photo-1579152128802-e820d18958b1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 20,
    type: 'standard',
    title: { vi: '11. CƠ SỞ VẬT CHẤT & HẠ TẦNG', en: '11. PHYSICAL INFRASTRUCTURE' },
    subtitle: { vi: 'Dây chuyền máy móc hiện đại', en: 'Modern Production Line' },
    content: [
      { vi: 'Máy bao phim (Tablet Coating Machine) và Máy sấy tầng sôi.', en: 'Tablet Coating Machines and Fluid Bed Machines.' },
      { vi: 'Máy ép vỉ (Blister Packaging Machine) công nghệ cao.', en: 'High-tech Blister Packaging Machines.' }
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 21,
    type: 'flowchart',
    title: { vi: '12. QUY TRÌNH SẢN XUẤT', en: '12. PRODUCTION PROCESS' },
    flowchartSteps: [
      { vi: 'Tạo hạt (Granulation)', en: 'Granulation' },
      { vi: 'Trộn (Mixer)', en: 'Mixer' },
      { vi: 'Dập viên (Tablet Press)', en: 'Tablet Press' },
      { vi: 'Đóng nang (Capsule Filling)', en: 'Capsule Filling' }
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 22,
    type: 'standard',
    title: { vi: '13. CÔNG NGHỆ SẢN XUẤT', en: '13. PRODUCTION DEPARTMENT' },
    content: [
      { vi: 'Hệ thống tạo hạt và sấy của Glatt.', en: 'Glatt’s granulation and drying system.' },
      { vi: 'Máy dập viên FETTE và Đóng nang Bosch.', en: 'FETTE tablet press and Bosch capsule filling machine.' },
      { vi: 'Hệ thống đóng gói tự động tốc độ cao.', en: 'High-speed automated packaging lines.' }
    ],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 23,
    type: 'thankyou',
    title: { vi: 'CẢM ƠN QUÝ VỊ!', en: 'THANK YOU!' },
    subtitle: { vi: 'Hợp tác cùng Fremed vì sức khỏe cộng đồng', en: 'Partnering with Fremed for community health' },
    image: 'https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&q=80&w=1920'
  }
];
