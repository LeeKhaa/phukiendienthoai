// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function (_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/best-seller-1_sac.webp',
    'Sạc nhanh 20W Apple MHJE3ZA | Chính hãng Apple Việt Nam',
    'Cáp_Sạc',
    '490000',
    `Cổng sạc ra: 1 x Type-C
Sạc tối đa: 1 thiết bị
Công suất sạc: 20W
Cổng giao tiếp: USB-C
Tính năng: Power Delivery
Hãng sản xuất: Apple Chính hãng`,
    '12 Tháng');

BestSeller.add('./asset/img/best-seller-2_op13pro.jpg',
    'Ốp lưng iPhone 13 Pro Silicone Gear4 Denali Chính hãng',
    'Ốp_Lưng',
    '600000',
    `Màu sắc thanh lịch, thiết kế ốp lưng đẹp mắt.
    Phím nổi dễ sử dụng nhờ phần viền được chế tác từ nhựa dẻo với khả năng đàn hồi cao.
    Mặt lưng làm từ nhựa cứng bền bỉ, chống sốc, chịu va chạm tốt, bảo vệ hiệu quả chiếc iPhone 13 Pro của bạn.
    Hạn chế bám dính vân tay và mồ hôi cho cảm giác sử dụng dễ chịu.`,
    'Không bảo hành');

BestSeller.add('./asset/img/best-seller-3_aripods.jpg',
    `Tai nghe Bluetooth AirPods 3 Lightning Charge Apple MPNY3`,
    'Earphone',
    '4390000',
    `Thời lượng pin tai nghe: Dùng 6 giờ - Sạc Hãng không công bố
Thời lượng pin hộp sạc: Dùng 30 giờ - Sạc Hãng không công bố
Cổng sạc: Lightning
Tiện ích: Chống nước IPX4, Có mic thoại
Kết nối cùng lúc: 1 thiết bị
Công nghệ kết nối: Bluetooth 5.0
Điều khiển: Cảm ứng lực
Kích thước: Dài 3.1 cm - Rộng 1.8 cm - Cao 1.6 cm
Khối lượng: 4.28 g
Hãng: Apple`,
    '12 Tháng');

BestSeller.add('./asset/img/best-seller-4_opsamsung.webp',
    `Ốp lưng Samsung Galaxy S23 Ultra Spigen Ultra Hybrid Crystal Clear`,
    'Ốp_Lưng',
    '585000',
    `Hãng sản xuất:  Spigen
    Chất liệu: Polycarbonate, TPU
Phân loại ốp: Chống sốc, Ốp trong
Tính năng: Hỗ trợ sạc không dây, Chống sốc, va đập`,
    'Không bảo hành')

BestSeller.add('./asset/img/best-seller-5_tainghe_oppo.jpg',
    `Tai nghe Bluetooth True Wireless OPPO ENCO Buds 2 ETE41`,
    'Earphone',
    '990000',
    `Thời lượng pin tai nghe: Dùng 7 giờ - Sạc 1.5 giờ
Thời lượng pin hộp sạc: Dùng 28 giờ - Sạc 3 giờ
Cổng sạc: Type-C
Công nghệ âm thanh: codecSBCcodecAAC
Tương thích: AndroidiOS (iPhone)
Ứng dụng kết nối: HeyMelody App
Tiện ích: Chống nước IPX4, Game Mode, Chụp ảnh nhanh
Kết nối cùng lúc: 1 thiết bị
Công nghệ kết nối: Bluetooth 5.2
Điều khiển: Cảm ứng chạm
Phím điều khiển: Chuyển bài hát, Tăng/giảm âm lượng, Nhận/Ngắt cuộc gọi
Kích thước: Dài 2.1 cm - Rộng 2.2 cm - Cao 3.4 cm
Khối lượng: 4 g
Thương hiệu của: Trung Quốc
Sản xuất tại: Trung Quốc
Hãng: OPPO`,
    '24 Tháng')

BestSeller.add('./asset/img/best-seller-6_sacduphong.jpg',
    `Pin sạc dự phòng 10000mAh Type C PD QC3.0 22.5W Xmobile T121`,
    'Cáp_Sạc',
    '600000',
    `Dung lượng pin: 10000 mAh
Hiệu suất sạc: 66%
Lõi pin: Li-Ion
Công nghệ/Tiện ích: Đèn LED báo hiệu, Power Delivery, Quick Charge 3.0
Thời gian sạc đầy pin: Khoảng 3 giờ (dùng Adapter 3A)
Nguồn ra: Type C: 5V - 3A, 9V - 2.22A, 12V - 1.67A (Max 20W)USB: 4.5V - 5A, 5V - 4.5A, 5V - 3A, 9V - 2A, 12V - 1.5A (Max 22.5W)
Nguồn vào: Type C: 5V - 3A, 9V - 2A, 12V - 1.5A
Kích thước: Dày 2.55 cm - Rộng 5.2 cm - Dài 10.4 cm
Khối lượng: 180 g
Thương hiệu của: Thế Giới Di Động
Sản xuất tại: Trung Quốc
Hãng: Xmobile`,
    '24 Tháng')

BestSeller.add('./asset/img/best-seller-7_opsamsung_A14.jpg',
    `Ốp lưng Galaxy A14 Nhựa cứng viền dẻo 1.6mm Kingxbar`,
    'Ốp_Lưng',
    '100000',
    `Kiểu dáng sang trọng, ốp lưng hoàn toàn trong suốt thể hiện rõ màu sắc gốc của điện thoại.
Ốp lưng được làm từ chất liệu nhựa cứng viền dẻo bảo vệ tối ưu quá trình sử dụng.
Sản xuất tinh xảo từ vị trí cụm camera đến chỗ cắm sạc, ốp lưng vừa vặn ôm sát điện thoại.
Sản phẩm chuyên dùng dành cho Galaxy A14.`,
    'Không bảo hành')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function (_img, _name, _brand, _price, _desc, _warranty) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty: _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('./asset/img/oplung-14promax.webp',
    `Ốp lưng Magsafe iPhone 14 Pro Max Nhựa trong Apple MPU73 Chính hãng`,
    'Ốp_Lưng',
    `795000`,
    `Model: Ốp lưng Apple Chính Hãng
Chất liệu: Chất liệu polycarbonate trong suốt quang học, Vật liệu linh hoạt giúp chống sốc
Màu sắc: Trong suốt
Tính năng: Chống trầy xước, Tương thích Magsafe
Tương thích: iPhone 14 Pro Max
Thương hiệu: Apple
Hãng: Mỹ
Sản xuất tại: Đang cập nhật`,
    'Không bảo hành')

FeatureProduct.add('./asset/img/miengdan-ip14promax.webp',
    `Cường lực chống ánh sáng xanh iPhone 14 Pro Max ANANK (viền đen)`,
    'Miếng_Dán',
    `350000`,
    `Mode: Chống ánh sáng xanh ( viền đen )
Chất liệu: Cao cấp
Màu sắc: Viền đen
Chức năng: Bảo vệ màn hình, Độ cứng 9H, chống trầy xước, Cảm ứng mượt mà, Chống ánh sáng xanh
Tương thích: iPhone 14 Pro Max
Thương hiệu: Nhật Bản
Sản xuất tại: Đang cập nhật
Hãng: Anank`,
    '30 Ngày, Lỗi đổi tại chỗ');

FeatureProduct.add('./asset/img/sac-du-phong_Innostyle.webp',
    `Pin sạc dự phòng Innostyle PowerMax 10.000 mAh 20W PD/QC 3.0 IP20PD`,
    'Cáp_Sạc',
    `450000`,
    `Model: IP20PD
Công suất sạc: 20W max PD và QC3.0
Hiệu suất sạc: 65%-75%
Dung lượng pin: 10.000 mAh
Lõi pin: Lithium Polymer
Thời gian sạc đầy pin: 50% trong vòng 30p
Công nghệ/Tiện ích: Power Delivery và Quick Charge 3.0
Màu sắc: White - Black
Sản phẩm gồm: 1 x SDP IP20PD, 1 x Cáp sạc, 1 x Sách HDSD
Thương hiệu: Mỹ
Hãng: Innostyle
Sản xuất tại: Đang cập nhật `,
    '24 Tháng');

FeatureProduct.add('./asset/img/gimbal-chong-rung-zhiyun-smooth-q4-thumb-600x600.jpg',
    `Gimbal Chống Rung Zhiyun Smooth Q4`,
    'Gimbal',
    `2155000`,
    `Kích thước phù hợp: Điện thoại từ 4.7 - 6.7 inch
Kết nối: Bluetooth 4.2
Ứng dụng hỗ trợ/kết nối: ZY Cami
Trục chống rung: Trục cuộn
Phạm vi góc quay: Trục cuộn 338 độ - Trục xoay 331 độ - Trục nghiêng 338 độ
Độ dài sử dụng: Tối thiểu 20 cm - Tối đa 21.5 cm
Thời gian sử dụng: Dùng 15 giờ - Sạc 2.5 giờ
Cổng sạc: USB Type-C
Loại pin: Li-Ion
Phím điều khiển: Nút nguồnZoom xa / gần
Khối lượng: 370 g
Thương hiệu của: Trung Quốc
Sản xuất tại: Trung Quốc
Hãng: Zhiyun `,
    '12 Tháng');

FeatureProduct.add('./asset/img/mieng-dan-kinh-samsung-galaxy-a54-jincase-thumb-600x600.jpg',
    `Miếng dán kính Samsung Galaxy A54 Jincase`,
    'Miếng_Dán',
    `150000`,
    `Miếng dán chống va đập, giảm trầy xước tối đa cho máy.
Hạn chế bám bụi, dấu vân tay, dễ dàng lau chùi khi bám bẩn.
Miếng dán trong suốt, độ nhạy cao, giữ nguyên chất lượng cảm ứng và giúp hiển thị tự nhiên như màn hình nguyên gốc.
Sản phẩm chuyên dùng cho dòng máy Samsung Galaxy A54.`,
    '30 Ngày');

FeatureProduct.add('./asset/img/tai-nghe-bluetooth-true-wireless-mozard-ts13-thumb-1-600x600.jpg',
    `Tai nghe Bluetooth True Wireless Mozard TS13`,
    'Earphone',
    `420000`,
    `Thời lượng pin tai nghe: Dùng 5 giờ - Sạc 2 giờ
Thời lượng pin hộp sạc: Dùng 16 giờ - Sạc 1.5 giờ
Cổng sạc: Micro USB
Công nghệ âm thanh: Không có
Tương thích: Android, iOS (iPhone), Windows
Tiện ích: Đệm tai đi kèm
Kết nối cùng lúc: 1 thiết bị
Công nghệ kết nối: Bluetooth 5.0
Điều khiển: Phím nhấn
Phím điều khiển: Nghe/nhận cuộc gọiPhát/dừng chơi nhạc
Kích thước: Dài 2.4 cm - Rộng 1.6 cm - Cao 2.2 cm
Khối lượng: 4 g
Thương hiệu của: Thế Giới Di Động
Sản xuất tại: Trung Quốc
Hãng: Mozard`,
    '12 Tháng');

FeatureProduct.add('./asset/img/gimbal-chong-rung-zhiyun-smooth-q3-thumb-600x600.jpg',
    `Gimbal chống rung Zhiyun Smooth Q3`,
    'Gimbal',
    `1860000`,
    `Kích thước phù hợp: Điện thoại từ 4.7 - 6.7 inch
Kết nối: Bluetooth 5.0Bluetooth 4.0
Ứng dụng hỗ trợ/kết nối: ZY Cami
Trục chống rung: Trục cuộnTrục quay
Phạm vi góc quay: Trục cuộn 270 độ - Trục xoay 150 độ
Độ dài sử dụng: Tối thiểu 30 cm - Tối đa 54 cm
Thời gian sử dụng: Dùng 15 giờ - Sạc 3 giờ
Cổng sạc: USB Type-C
Loại pin: Li-po
Khối lượng: 340 g
Thương hiệu của: Trung Quốc
Sản xuất tại: Trung Quốc
Hãng: Zhiyun `,
    '12 Tháng');

FeatureProduct.add('./asset/img/op-lung-galaxy-z-flip4-nhua-cung-vien-deo-uniq-hybrid-lifepro-xtreme-thumb-600x600.jpg',
    `Ốp lưng Galaxy Z Flip4 Nhựa cứng viền dẻo UNIQ Hybrid Lifepro Xtreme Chính hãng`,
    'Ốp_Lưng',
    `480000`,
    `Hãng sản xuất: Samsung Chính hãng
Dòng sản phẩm: Z Flip 4
Phân loại ốp: Ốp trong
Tính năng: Siêu mỏng`,
    'Không bảo hành');

FeatureProduct.add('./asset/img/mieng-dan-35_1_7.jpg',
    `Dán chống va đập Samsung Galaxy S21 FE Full`,
    'Miếng_Dán',
    `150000`,
    `Kính cường lực Nano thủy tinh công USA chính hãng Pskin cho S21 Fe
Dán Full màn cảm ứng
Chống va đập tốt, mỏng đảm bảo chất lượng hiển thị đặc biệt cảm ứng và mở khóa bằng vân tay
Dễ bóc không để lại keo trên bề mặt`,
    '30 Ngày');

FeatureProduct.add('./asset/img/op-lung-galaxy-a24-silicone-vibes-printing-jm-candy-thimb-600x600.jpg',
    `Ốp lưng Galaxy A24 Silicone Vibes Printing JM Candy`,
    'Ốp_Lưng',
    `100000`,
    `Ốp lưng Galaxy A24 Silicone Vibes Printing JM Candy ôm vừa vặn với chiếc điện thoại, bảo vệ máy tối ưu.
Ốp lưng được cắt khoét tinh xảo từng chi tiết, bảo vệ camera tuyệt vời.
Ốp lưng chuyên dụng dành cho chiếc Galaxy A24.
Thiết kế ốp lưng Samsung tinh giản, hoạ tiết đặc sắc, phù hợp với người dùng ưa thích sự năng động.`,
    'Không bảo hành');

FeatureProduct.add('./asset/img/cuong-luc-2-5d-mocoll-samsung-galaxy-s23-thumbnail-230302040848-230302160848_thumb.webp',
    `Cường lực Samsung Galaxy S23 Mocoll 2.5D`,
    'Miếng_Dán',
    `290000`,
    `Model: MOC5746
Chất liệu: Cao cấp
Chức năng: Bảo vệ màn hình
Hiển thị màn hình: Đang cập nhật
Tương thích: Samsung Galaxy S23, Samsung Galaxy S23 Plus
Thương hiệu: Trung Quốc
Hãng: MOCOLL`,
    '30 Ngày');

FeatureProduct.add('./asset/img/bao-da-galaxy-a54-smart-clear-view-samsung-xanh-tim-thumb-600x600.jpg',
    `Bao da Galaxy A54 Smart Clear View Samsung Chính hãng`,
    'Ốp_Lưng',
    `890000`,
    `Sở hữu vẻ ngoài thời thượng, màu sắc đẹp mắt.
Chất liệu da tổng hợp bền chắc, giảm thiểu bám dính vân tay và bụi bẩn.
Bảo vệ toàn diện điện thoại, đặc biệt mặt trước có khe đựng thẻ tiện lợi.
Sản phẩm chuyên dùng cho chiếc Samsung Galaxy A54.`,
    'Không bảo hành');

FeatureProduct.add('./asset/img/group_135_1.webp',
    `Củ sạc Baseus Super SI 25W 1 cổng kèm cáp Type-C to Type-C 1M`,
    'Cáp_Sạc',
    `300000`,
    `Cổng sạc ra: 1 x Type-C
Sạc tối đa: 1 thiết bị
Công suất sạc: 25 W
Tính năng: Siêu bền, Sạc nhanh, Chống cháy nổ, Power Delivery, PowerIQ
Cáp đi kèm: Cáp Type - C 1 m
Kích thước: 41 x 34 x 28 mm
Trọng lượng: 52 gr
Hãng sản xuất: Baseus`,
    '12 Tháng');

FeatureProduct.add('./asset/img/_0000_1157309453_1.webp',
    `Dán chống va đập Samsung Galaxy A23 Full màn hình`,
    'Miếng_Dán',
    `150000`,
    `Hãng sản xuất: Hãng khác
Dòng sản phẩm: Samsung khác
Loại miếng dán: Dán cường lực màn hình`,
    '30 Ngày');

FeatureProduct.add('./asset/img/mophie_snap_powerstation.webp',
    `Pin sạc dự phòng Mophie Snap Powerstation 10.000mAh`,
    'Cáp_Sạc',
    `1190000`,
    `Dung lượng pin: 10.000 mAh
Công suất sạc: Có dây: 2 0W, Không dây: 7.5W
Cổng sạc ra: 1 x Type-C
Cổng sạc vào: 1 x Type-C
Tính năng: Sạc nhanh Power Dilevery, Chống cháy nổ, chập điện, Bọc vải chống xước, Hỗ trợ sạc không dây, Hỗ trợ sạc không dây Magsafe
Chứng chỉ an toàn: Có
Công suất đầu ra: USB-C PD: 20W, Wireless Charging (Qi): 7.5W
Kích thước: 69 x 129 x 22 mm
Trọng lượng: 247 g
Hãng sản xuất: Mophie `,
    '24 Tháng');

FeatureProduct.add('./asset/img/20_3_6.webp',
    `Miếng dán Camera Samsung Galaxy S22 Ultra Zeelot Pishield viền màu`,
    'Miếng_Dán',
    `350000`,
    `Hãng sản xuất: Zeelot
Dòng sản phẩm: Galaxy S22 Ultra
Loại miếng dán: Dán bảo vệ camera`,
    'Không bảo hành');

FeatureProduct.add('./asset/img/frame_1_1__1_5.webp',
    `Cáp Baseus Crystal Shine USB-C to Lightning 1.2M`,
    'Cáp_Sạc',
    `160000`,
    `Loại cáp sạc: Type-C to Lightning
Chiều dài dây: 1.2m
Công suất sạc: 20W
Tính năng: Siêu bền, Sạc nhanh
Đạt chứng nhận: MFI
Chất liệu: Vỏ hợp kim nhôm
Hãng sản xuất: Baseus`,
    '12 Tháng');

FeatureProduct.add('./asset/img/dan-bao-ve-camera-khong-vien-iphone-14-pro14-pro-max-mipow-diamondshield-thumbnail-12-230213105315-230213105315_thumb.webp',
    `Dán bảo vệ camera không viền iPhone 14 Pro/14 Pro Max Mipow Diamondshield`,
    'Miếng_Dán',
    `310000`,
    `Model:	Diamondshield 
Chất liệu:	Chất liệu Aero Matellic
Chức năng:	Bảo vệ camera
Hiển thị:	Không viền
Tương thích:	iPhone 14 Pro / iPhone 14 Pro Max
Thương hiệu:	Mỹ
Hãng:	Mipow`,
    '7 ngày đổi mới ngay cả cấn, bể');

FeatureProduct.add('./asset/img/frame_641.png',
    `Củ sạc Acefast PD 65W 3 cổng (2 Type-C, 1 USB-A) A13`,
    'Cáp_Sạc',
    `790000`,
    `Cổng sạc ra: 2 x Type-C, 1 x USB-A
Sạc tối đa: 3 thiết bị
Công suất sạc: 65 W
Tính năng: Sạc nhanh, Chống cháy nổ, Dùng được cho laptop, Power Delivery
Đạt chứng nhận: Chống cháy nổ V0, PSE, 3C, ERP6
Kích thước: 96.4 x 30.3 x 52.8 mm
Trọng lượng: 120 gr
Hãng sản xuất: AceFast`,
    '24 Tháng');

FeatureProduct.add('./asset/img/op-lung-xiaomi-poco-c40-nhua-cung-vien-deo-races-i-jm-thumb-600x600.jpg',
    `Ốp lưng Xiaomi Poco C40 Nhựa cứng viền dẻo RACES I JM `,
    'Ốp_Lưng',
    `150000`,
    `Thiết kế ốp lưng đơn giản, màu sắc sang trọng tạo vẻ ngoài nổi bật cho điện thoại.
Bảo vệ điện thoại tối ưu trước những va chạm và cọ xát nhờ mặt lưng làm từ nhựa cứng bền bỉ.
Phần viền làm từ nhựa dẻo mềm mại, vừa giúp dễ dàng tháo lắp, vừa giúp phần phím nổi dễ dàng sử dụng.
Chi tiết cắt khoét tỉ mỉ, tinh tế, ốp lưng ôm trọn điện thoại Xiaomi Poco C40.`,
    'Không bảo hành');

localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));