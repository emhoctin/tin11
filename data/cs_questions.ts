import { Question } from '../types';

export const MOCK_CS_QUESTIONS: Question[] = [
  // Chủ đề 1: Bài 1: Hệ điều hành
  {
    "id": "q_cs_11_ud_01_01",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Phát biểu nào sau đây là SAI về chức năng của hệ điều hành?",
    "options": [
      "Không thực hiện quản lí tệp và thư mục.",
      "Cung cấp tiện ích nâng cao hiệu quả sử dụng máy tính.",
      "Cung cấp môi trường giao tiếp với người sử dụng.",
      "Tổ chức thực hiện các chương trình, là môi trường để chạy các ứng dụng."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Hệ điều hành", "Chức năng"],
    "explanation_prompt": "Phân biệt các chức năng chính của hệ điều hành, bao gồm quản lí tệp, thiết bị và cung cấp môi trường chạy chương trình."
  },
  {
    "id": "q_cs_11_ud_01_02",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Phát biểu nào sau đây là khái niệm Hệ điều hành?",
    "options": [
      "Môi trường để chạy các ứng dụng.",
      "Phần mềm để chạy các ứng dụng.",
      "Thiết bị trung gian để chạy các ứng dụng.",
      "Chương trình tạo ra các ứng dụng."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Khái niệm", "Hệ điều hành"],
    "explanation_prompt": "Hệ điều hành là phần mềm hệ thống cung cấp môi trường để chạy các chương trình ứng dụng."
  },
  {
    "id": "q_cs_11_ud_01_03",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Bước phát triển quan trọng của hệ điều hành máy tính cá nhân là gì?",
    "options": [
      "Cơ chế “plug & play”.",
      "Giao diện dễ sử dụng.",
      "Có hệ điều hành.",
      "Có nhiều tiện ích nâng cao hiệu quả sử dụng máy tính."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phát triển", "Lịch sử HĐH"],
    "explanation_prompt": "Tìm hiểu cơ chế 'plug & play' giúp hệ điều hành tự nhận dạng thiết bị phần cứng khi cắm vào máy tính."
  },
  {
    "id": "q_cs_11_ud_01_04",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Phát biểu nào sau đây nói về công dụng của cơ chế 'plug & play'?",
    "options": [
      "Giúp hệ điều hành nhận biết các thiết bị ngoại vi ngay khi khởi động máy.",
      "Dễ dàng cài đặt các chương trình ứng dụng.",
      "Hỗ trợ kết nối mạng nhanh chóng.",
      "Quản lí việc lưu trữ dữ liệu."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Thiết bị", "Plug & Play"],
    "explanation_prompt": "Cơ chế 'plug & play' giúp hệ điều hành tự động nhận dạng và cài đặt thiết bị ngoại vi."
  },
  {
    "id": "q_cs_11_ud_01_05",
    "topicId": "topic_cs_11_ud_01",
    "stem": "“Khác với máy chủ, siêu máy tính do kĩ sư vận hành, máy tính cá nhân dành cho người dùng phổ thông nên... là tiêu chí quan trọng nhất.”",
    "options": [
      "sự thân thiện, dễ sử dụng.",
      "sự thân thiết, dễ cài đặt.",
      "sự thân thiện, dễ phát triển.",
      "sự thân thiết, dễ nâng cấp."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Máy tính cá nhân", "Trải nghiệm người dùng"],
    "explanation_prompt": "Máy tính cá nhân hướng đến người dùng phổ thông, nên tính thân thiện và dễ sử dụng là yếu tố quan trọng."
  },
  {
    "id": "q_cs_11_ud_01_06",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Phát biểu nào sau đây là SAI khi nói về sự khác biệt của hệ điều hành thiết bị di động so với hệ điều hành cho máy cá nhân?",
    "options": [
      "Khó khăn khi cài đặt các ứng dụng.",
      "Giao diện thân thiện nhờ nhận dạng hành vi của người dùng thông qua các cảm biến.",
      "Dễ dàng kết nối mạng di động.",
      "Nhiều tiện ích hỗ trợ cá nhân."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Di động", "So sánh HĐH"],
    "explanation_prompt": "Phân biệt giữa hệ điều hành di động (Android, iOS) và hệ điều hành máy tính cá nhân (Windows, macOS)."
  },
  {
    "id": "q_cs_11_ud_01_07",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Giao diện ban đầu của hệ điều hành máy tính cá nhân là gì?",
    "options": [
      "Giao diện dòng lệnh.",
      "Giao diện đồ họa.",
      "Giao diện biểu tượng.",
      "Giao diện nhiều cửa sổ."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Giao diện", "Lịch sử HĐH"],
    "explanation_prompt": "Phân biệt các loại giao diện người dùng: dòng lệnh (CLI) và đồ họa (GUI)."
  },
  {
    "id": "q_cs_11_ud_01_08",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Hệ điều hành LINUX có đặc điểm gì nổi bật?",
    "options": [
      "Là hệ điều hành đa nhiệm, đa người dùng.",
      "Nguồn đóng.",
      "Không hỗ trợ mạng.",
      "Chỉ dành cho thiết bị di động."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Linux", "Mã nguồn mở"],
    "explanation_prompt": "Linux là hệ điều hành mã nguồn mở, hỗ trợ đa nhiệm, đa người dùng, và thường dùng cho máy chủ, máy tính cá nhân."
  },
  {
    "id": "q_cs_11_ud_01_09",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Một hệ điều hành cho máy tính cá nhân có thể thực hiện những nhiệm vụ gì sau đây?",
    "options": [
      "Quản lý thiết bị và lưu trữ dữ liệu.",
      "Tự động sửa lỗi phần cứng.",
      "Tạo lập và thiết kế giao diện người dùng.",
      "Kiểm tra phần cứng máy tính."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Quản lý thiết bị", "Lưu trữ dữ liệu"],
    "explanation_prompt": "Hệ điều hành chịu trách nhiệm quản lí phần cứng, thiết bị ngoại vi, và lưu trữ dữ liệu."
  },
  {
    "id": "q_cs_11_ud_01_10",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Lợi ích của việc sử dụng hệ điều hành mã nguồn mở như Linux là gì?",
    "options": [
      "Chi phí thấp và linh hoạt trong việc phát triển phần mềm.",
      "Dễ dàng trong việc thiết kế đồ họa.",
      "Hỗ trợ giao diện dòng lệnh tốt hơn.",
      "Không cần bảo mật."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Mã nguồn mở", "Linux", "Lợi ích"],
    "explanation_prompt": "Hệ điều hành mã nguồn mở như Linux cho phép sử dụng miễn phí, tùy chỉnh linh hoạt và tiết kiệm chi phí phát triển."
  },
  {
    "id": "q_cs_11_ud_01_11",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Một công ty phần mềm nhỏ đang phát triển một ứng dụng mới. Họ cần môi trường để các lập trình viên có thể làm việc hiệu quả và quản lí tài nguyên máy tính. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Hệ điều hành cung cấp môi trường để các chương trình ứng dụng được thực hiện.",
      "Chức năng quản lí lưu trữ dữ liệu (quản lí tệp và thư mục) là một trong các nhóm chức năng của hệ điều hành.",
      "Hệ điều hành chịu trách nhiệm kiểm soát các thiết bị đầu cuối như màn hình, máy in.",
      "Hệ điều hành cho máy tính cá nhân phải có giao diện dòng lệnh."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Hard",
    "tags": ["Hệ điều hành", "Quản lí tài nguyên", "Tệp và thiết bị"],
    "explanation_prompt": "Phân tích vai trò của hệ điều hành trong việc cung cấp môi trường hoạt động, quản lí tệp, thư mục và thiết bị; đồng thời nhận diện đặc điểm của giao diện người dùng."
  },
  {
    "id": "q_cs_11_ud_01_12",
    "topicId": "topic_cs_11_ud_01",
    "stem": "Bạn vừa mua một chiếc điện thoại thông minh mới và muốn trải nghiệm đầy đủ các tính năng hiện đại. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Hệ điều hành iOS của Apple và Android của Google là các hệ điều hành phổ biến cho thiết bị di động.",
      "Hệ điều hành cho thiết bị di động được thiết kế ưu tiên giao tiếp trực tiếp với người sử dụng qua màn hình cảm ứng, bàn phím ảo.",
      "Hệ điều hành cho thiết bị di động thường ít hỗ trợ các tiện ích cá nhân hơn so với máy tính cá nhân.",
      "Các thiết bị di động có thể kết nối mạng dễ dàng nhờ sự hỗ trợ của hệ điều hành (như Wifi, 4G, 5G, Bluetooth)."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Medium",
    "tags": ["Hệ điều hành di động", "iOS", "Android", "Kết nối mạng"],
    "explanation_prompt": "Xác định các đặc điểm và lợi ích của hệ điều hành di động hiện nay như iOS và Android; so sánh với hệ điều hành máy tính cá nhân."
  },

  // Chủ đề 1: Bài 2: Thực hành sử dụng hệ điều hành
  {
    "id": "q_cs_11_ud_02_01",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Biểu tượng Recycle Bin trên màn hình Windows có chức năng gì?",
    "options": [
      "Chứa các file đã xóa.",
      "Truy cập Internet.",
      "Quản lý thư mục.",
      "Cài đặt chương trình."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Windows", "Recycle Bin", "Tệp tin"],
    "explanation_prompt": "Giải thích chức năng của Recycle Bin trong việc lưu tạm các tệp bị xóa trước khi xóa vĩnh viễn."
  },
  {
    "id": "q_cs_11_ud_02_02",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Để mở một chương trình trên máy tính, bạn có thể thực hiện thao tác nào sau đây?",
    "options": [
      "Nháy đúp chuột vào biểu tượng chương trình.",
      "Nháy chuột phải vào biểu tượng chương trình.",
      "Nhấn tổ hợp phím Ctrl + C.",
      "Kéo biểu tượng chương trình vào thanh Taskbar."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Windows", "Chương trình", "Khởi động"],
    "explanation_prompt": "Xác định thao tác mở chương trình bằng nháy đúp chuột trên giao diện Windows."
  },
  {
    "id": "q_cs_11_ud_02_03",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Trong hệ điều hành Windows, để tạo mới một thư mục, bạn thực hiện thao tác nào?",
    "options": [
      "Nhấn chuột phải – New Folder.",
      "Nhấn chuột phải – Copy.",
      "Nhấn chuột phải – Rename.",
      "Nhấn chuột phải – Delete."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Thư mục", "Windows", "Tạo mới"],
    "explanation_prompt": "Giải thích quy trình tạo thư mục mới trong Windows bằng menu chuột phải."
  },
  {
    "id": "q_cs_11_ud_02_04",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Phím tắt để mở cửa sổ File Explorer trong hệ điều hành Windows là gì?",
    "options": [
      "Windows + E.",
      "Ctrl + E.",
      "Alt + F4.",
      "Shift + E."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Windows", "File Explorer", "Phím tắt"],
    "explanation_prompt": "Ghi nhớ các phím tắt cơ bản trong Windows, đặc biệt là tổ hợp Windows + E để mở File Explorer."
  },
  {
    "id": "q_cs_11_ud_02_05",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Khi bạn nhấn chuột phải vào một đối tượng và chọn Delete, điều gì xảy ra với đối tượng đó?",
    "options": [
      "Đối tượng sẽ được chuyển vào Recycle Bin.",
      "Đối tượng sẽ bị xóa vĩnh viễn.",
      "Đối tượng sẽ bị ẩn đi.",
      "Đối tượng sẽ được sao chép."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Xóa tệp", "Recycle Bin", "Windows"],
    "explanation_prompt": "Phân biệt giữa xóa tạm thời (chuyển vào Recycle Bin) và xóa vĩnh viễn (Shift + Delete)."
  },
  {
    "id": "q_cs_11_ud_02_06",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Khi sử dụng tiện ích Disk Cleanup, bạn đang thực hiện thao tác nào sau đây?",
    "options": [
      "Dọn dẹp các tập tin tạm thời.",
      "Xóa các file hệ thống.",
      "Tối ưu hóa ổ đĩa cứng.",
      "Sửa lỗi hệ thống."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Disk Cleanup", "Bảo trì hệ thống"],
    "explanation_prompt": "Disk Cleanup giúp xóa các tập tin tạm thời, rác hệ thống nhằm giải phóng dung lượng."
  },
  {
    "id": "q_cs_11_ud_02_07",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Bạn cần sao chép một tập tin từ ổ D sang ổ E. Thao tác nào dưới đây là đúng?",
    "options": [
      "Nhấn chuột phải vào tập tin, chọn Copy, rồi vào ổ E và chọn Paste.",
      "Nhấn chuột phải vào tập tin, chọn Cut, rồi vào ổ E và chọn Paste.",
      "Nhấn chuột phải vào tập tin, chọn Delete.",
      "Nhấn chuột phải vào tập tin, chọn Rename."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Sao chép tệp", "Windows", "Thực hành HĐH"],
    "explanation_prompt": "Phân biệt thao tác sao chép (Copy) và di chuyển (Cut) tệp giữa các ổ đĩa."
  },
  {
    "id": "q_cs_11_ud_02_08",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Tại sao cần phải sử dụng chức năng Defragment ổ đĩa cứng?",
    "options": [
      "Để sắp xếp lại dữ liệu trên ổ đĩa, tăng hiệu suất.",
      "Để xóa file không cần thiết.",
      "Để giải phóng dung lượng ổ đĩa.",
      "Để bảo vệ máy tính khỏi virus."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Defragment", "Ổ đĩa", "Tối ưu hóa"],
    "explanation_prompt": "Chống phân mảnh giúp sắp xếp dữ liệu liền kề, giúp truy cập nhanh hơn."
  },
  {
    "id": "q_cs_11_ud_02_09",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Để đổi tên một thư mục trong hệ điều hành Windows, bạn thực hiện thao tác nào?",
    "options": [
      "Nhấn chuột phải và chọn Rename.",
      "Nhấn chuột phải và chọn New Folder.",
      "Nhấn chuột phải và chọn Cut.",
      "Nhấn chuột phải và chọn Delete."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Đổi tên", "Thư mục", "Windows"],
    "explanation_prompt": "Xác định thao tác đổi tên thư mục bằng menu chuột phải trong File Explorer."
  },
  {
    "id": "q_cs_11_ud_02_10",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Bạn muốn xóa một ứng dụng trên máy tính của mình. Bạn sẽ thực hiện các bước nào?",
    "options": [
      "Vào Control Panel chọn Uninstall a program, chọn ứng dụng và nhấn Uninstall.",
      "Nhấn chuột phải vào biểu tượng ứng dụng và chọn Delete.",
      "Kéo biểu tượng ứng dụng vào thùng rác.",
      "Nhấn chuột phải vào ứng dụng và chọn Cut."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Windows", "Control Panel", "Gỡ cài đặt"],
    "explanation_prompt": "Gỡ ứng dụng qua Control Panel giúp xóa đúng cách, tránh lỗi hệ thống."
  },
  {
    "id": "q_cs_11_ud_02_11",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Để chụp ảnh màn hình và lưu lại, bạn sẽ sử dụng phím nào trên bàn phím?",
    "options": [
      "Print Screen.",
      "Ctrl + Alt.",
      "Shift + F12.",
      "Alt + Tab."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phím tắt", "Chụp màn hình", "Windows"],
    "explanation_prompt": "Phím Print Screen cho phép chụp toàn bộ màn hình và lưu vào clipboard."
  },
  {
    "id": "q_cs_11_ud_02_12",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Khi bạn cài đặt một ứng dụng và máy tính hiển thị thông báo “This application is not responding”, bạn nên làm gì?",
    "options": [
      "Sử dụng tổ hợp phím Ctrl + Alt + Delete để mở Task Manager và kết thúc ứng dụng.",
      "Tiếp tục chờ ứng dụng hồi đáp.",
      "Khởi động lại máy tính ngay lập tức.",
      "Cài đặt lại hệ điều hành."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Lỗi ứng dụng", "Task Manager", "Windows"],
    "explanation_prompt": "Khi ứng dụng bị treo, dùng Task Manager để kết thúc tiến trình thay vì khởi động lại máy."
  },
  {
    "id": "q_cs_11_ud_02_13",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Sau một thời gian dài sử dụng, máy tính cá nhân của bạn bắt đầu chạy chậm. Bạn quyết định thực hiện một số thao tác bảo trì cơ bản trên ổ đĩa để nâng cao hiệu suất. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Tiện ích chống phân mảnh ổ đĩa (Defragment) có chức năng giúp tăng tốc độ truy cập dữ liệu.",
      "Việc thực hiện kiểm tra ổ đĩa (Check disk) sẽ giúp tìm kiếm các lỗi trên ổ đĩa và khôi phục lại các vùng bị hỏng (bad sector).",
      "Tiện ích tối ưu hóa ổ đĩa (Optimize) chính là tên gọi khác của chống phân mảnh ổ đĩa (Defragment).",
      "Nên thực hiện chống phân mảnh ổ đĩa ngay cả khi ổ đĩa đang được nén hoặc có tác động đến dữ liệu."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Hard",
    "tags": ["Bảo trì hệ thống", "Ổ đĩa", "Defragment", "Check Disk"],
    "explanation_prompt": "Phân biệt chức năng của Defragment, Check Disk và Optimize trong bảo trì hệ điều hành Windows."
  },
  {
    "id": "q_cs_11_ud_02_14",
    "topicId": "topic_cs_11_ud_02",
    "stem": "Trong quá trình học tập, bạn cần quản lí các tài liệu trên máy tính bằng hệ điều hành Windows. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Để quản lí tệp và thư mục trên Windows, người dùng sử dụng tiện ích File Explorer.",
      "Trong File Explorer, để xem nội dung bên trong một thư mục, người dùng nháy đúp chuột vào biểu tượng thư mục đó.",
      "Trong hệ điều hành Windows, người dùng không thể đổi tên tệp hoặc thư mục.",
      "Các thao tác cơ bản trong quản lí tệp và thư mục là tạo, đổi tên, xóa, di chuyển thư mục và tệp."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Hard",
    "tags": ["Windows", "File Explorer", "Quản lí tệp", "Thực hành HĐH"],
    "explanation_prompt": "Nhận diện đúng các thao tác cơ bản trong quản lí tệp, thư mục bằng File Explorer."
  },

  // Chủ đề 1: Bài 3: Phần mềm nguồn mở và phần mềm trên Internet
  {
    "id": "q_cs_11_ud_03_01",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Chọn phát biểu ĐÚNG về mã nguồn.",
    "options": [
      "Chương trình viết dưới dạng văn bản gần với ngôn ngữ tự nhiên.",
      "Chương trình viết dưới dạng văn bản máy tính có thể chạy trực tiếp.",
      "Chương trình được dịch thành dãy lệnh máy để máy tính chạy trực tiếp.",
      "Chương trình được dịch thành dãy lệnh máy gần với ngôn ngữ tự nhiên."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Mã nguồn", "Lý thuyết phần mềm"],
    "explanation_prompt": "Giải thích vì sao mã nguồn là dạng văn bản mà con người có thể đọc và chỉnh sửa."
  },
  {
    "id": "q_cs_11_ud_03_02",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm nguồn đóng là gì?",
    "options": [
      "Phần mềm chuyển giao dưới dạng mã máy.",
      "Phần mềm được cung cấp mã nguồn.",
      "Phần mềm sử dụng qua Internet không cần cài đặt vào máy.",
      "Phần mềm không dùng để bán."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần mềm nguồn đóng"],
    "explanation_prompt": "So sánh phần mềm nguồn đóng và phần mềm nguồn mở."
  },
  {
    "id": "q_cs_11_ud_03_03",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm nguồn mở là gì?",
    "options": [
      "Phần mềm được cung cấp mã nguồn.",
      "Phần mềm chuyển giao dưới dạng mã máy.",
      "Phần mềm dùng để bán.",
      "Phần mềm sử dụng qua Internet không cần cài đặt vào máy."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần mềm nguồn mở"],
    "explanation_prompt": "Nêu đặc điểm của phần mềm nguồn mở."
  },
  {
    "id": "q_cs_11_ud_03_04",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm thương mại thuộc loại phần mềm nào?",
    "options": [
      "Phần mềm nguồn đóng.",
      "Phần mềm nguồn mở.",
      "Phần mềm chạy trên Internet.",
      "Phần mềm tự do."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần mềm thương mại"],
    "explanation_prompt": "Phân biệt phần mềm thương mại và phần mềm miễn phí."
  },
  {
    "id": "q_cs_11_ud_03_05",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Chọn phát biểu ĐÚNG trong các phát biểu sau về phần mềm “đặt hàng”.",
    "options": [
      "Phần mềm “đặt hàng” đáp ứng nhu cầu riêng và người dùng được hỗ trợ kĩ thuật.",
      "Phần mềm “đặt hàng” đáp ứng nhu cầu riêng và người dùng không được hỗ trợ kĩ thuật.",
      "Phần mềm “đặt hàng” có tính hoàn chỉnh cao, đáp ứng nhu cầu rộng rãi.",
      "Phần mềm “đặt hàng” chi phí thấp, không phụ thuộc nhiều vào nhà cung cấp."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm đặt hàng"],
    "explanation_prompt": "Giải thích ưu điểm của phần mềm đặt hàng."
  },
  {
    "id": "q_cs_11_ud_03_06",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Chọn phát biểu ĐÚNG trong các phát biểu sau về phần mềm “đóng gói”.",
    "options": [
      "Phần mềm “đóng gói” có tính hoàn chỉnh cao, đáp ứng nhu cầu rộng rãi.",
      "Phần mềm “đóng gói” được sử dụng miễn phí, có bảo hành theo hợp đồng.",
      "Phần mềm “đóng gói” đáp ứng nhu cầu riêng và người dùng được hỗ trợ kĩ thuật.",
      "Phần mềm “đóng gói” chi phí thấp, không phụ thuộc nhiều vào nhà cung cấp."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm đóng gói"],
    "explanation_prompt": "Phân tích đặc điểm của phần mềm đóng gói."
  },
  {
    "id": "q_cs_11_ud_03_07",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm nào sau đây thuộc loại phần mềm thương mại?",
    "options": [
      "Word trong bộ Microsoft Office.",
      "Writer trong bộ Open Office.",
      "Android.",
      "Linux."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm thương mại"],
    "explanation_prompt": "Nhận biết phần mềm thương mại qua ví dụ thực tế."
  },
  {
    "id": "q_cs_11_ud_03_08",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm nào sau đây là ví dụ của phần mềm nguồn mở thay thế cho phần mềm thương mại?",
    "options": [
      "GIMP thay cho Photoshop.",
      "Microsoft Excel thay cho Google Sheets.",
      "Windows thay cho Ubuntu.",
      "iOS thay cho Android."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm nguồn mở", "So sánh phần mềm"],
    "explanation_prompt": "Liệt kê ví dụ phần mềm nguồn mở tương ứng với phần mềm thương mại."
  },
  {
    "id": "q_cs_11_ud_03_09",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Chọn phát biểu ĐÚNG về phần mềm thương mại.",
    "options": [
      "Mất chi phí mua phần mềm và phí chuyển giao.",
      "Không hỗ trợ kĩ thuật cho người dùng.",
      "Có kiểm soát được mã nguồn.",
      "Được cộng đồng phát triển theo chuẩn chung."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần mềm thương mại"],
    "explanation_prompt": "Giải thích đặc điểm về chi phí và bản quyền của phần mềm thương mại."
  },
  {
    "id": "q_cs_11_ud_03_10",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Chọn phát biểu ĐÚNG về phần mềm nguồn mở.",
    "options": [
      "Được cộng đồng phát triển theo chuẩn chung, không phụ thuộc vào riêng ai.",
      "Người dùng được hỗ trợ kĩ thuật khi sử dụng.",
      "Khó kiểm soát những gì được cài cắm bên trong phần mềm.",
      "Mất chi phí mua phần mềm và phí chuyển giao."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần mềm nguồn mở"],
    "explanation_prompt": "Trình bày lợi ích của phần mềm nguồn mở."
  },
  {
    "id": "q_cs_11_ud_03_11",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm nào sau đây là phần mềm “đặt hàng”?",
    "options": [
      "Phần mềm đặt xe trên thiết bị di động.",
      "Hệ điều hành Android.",
      "Phần mềm xử lý ảnh Photoshop.",
      "Hệ quản trị cơ sở dữ liệu MySQL."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm đặt hàng"],
    "explanation_prompt": "Nhận biết phần mềm đặt hàng qua ví dụ thực tế."
  },
  {
    "id": "q_cs_11_ud_03_12",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Phần mềm nào sau đây là phần mềm chạy trên Internet?",
    "options": [
      "Soạn thảo văn bản Google Docs.",
      "Hệ điều hành Windows.",
      "Lập bảng tính Excel.",
      "Hệ quản trị cơ sở dữ liệu SQL Server."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm trực tuyến"],
    "explanation_prompt": "Nhận biết phần mềm chạy trên Internet và ưu điểm của nó."
  },
  {
    "id": "q_cs_11_ud_03_13",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Chọn phát biểu ĐÚNG về lợi ích phần mềm chạy trên Internet.",
    "options": [
      "Sử dụng bất cứ đâu chỉ cần có kết nối Internet, chi phí rẻ hoặc không mất phí.",
      "Miễn phí, tự do sử dụng cần cài đặt vào máy.",
      "Tốn nhiều chi phí mua phần mềm nhưng được hỗ trợ theo hợp đồng.",
      "Sử dụng bất cứ nơi nào, không mất phí, cần cài đặt vào máy mới sử dụng được."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm trực tuyến"],
    "explanation_prompt": "Giải thích ưu điểm của phần mềm chạy trên Internet."
  },
  {
    "id": "q_cs_11_ud_03_14",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Tại sao phần mềm thương mại lại có chi phí cao hơn so với phần mềm nguồn mở?",
    "options": [
      "Vì phần mềm thương mại được hỗ trợ kỹ thuật và phát triển chuyên nghiệp.",
      "Vì phần mềm thương mại có tính năng nhiều hơn.",
      "Vì phần mềm thương mại không cung cấp mã nguồn.",
      "Vì phần mềm thương mại không thể tải về miễn phí."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm thương mại"],
    "explanation_prompt": "Phân tích nguyên nhân chi phí cao của phần mềm thương mại."
  },
  {
    "id": "q_cs_11_ud_03_15",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Tại sao phần mềm nguồn mở lại quan trọng đối với sự phát triển của công nghệ thông tin?",
    "options": [
      "Vì nó thúc đẩy sự sáng tạo và chia sẻ kiến thức trong cộng đồng.",
      "Vì nó đảm bảo quyền sở hữu trí tuệ.",
      "Vì nó giúp giảm chi phí phát triển phần mềm.",
      "Vì nó dễ dàng để thương mại hóa."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Phần mềm nguồn mở"],
    "explanation_prompt": "Trình bày vai trò của phần mềm nguồn mở trong đổi mới công nghệ."
  },
  {
    "id": "q_cs_11_ud_03_16",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Một công ty khởi nghiệp muốn tiết kiệm chi phí mua bản quyền phần mềm. Họ đang cân nhắc sử dụng phần mềm nguồn mở thay thế. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Phần mềm thương mại là phần mềm được bán để bảo vệ ý tưởng và chống sửa đổi, người dùng phải mua bản quyền để sử dụng.",
      "Phần mềm nguồn mở cung cấp mã nguồn để người dùng có thể tự sửa đổi, cải tiến, phát triển, phân phối lại theo các quy định của giấy phép nguồn mở GNU GPL.",
      "Phần mềm nguồn mở có ưu điểm là minh bạch vì có thể kiểm soát được mã nguồn.",
      "Phần mềm nguồn mở không thể thay thế được các phần mềm thương mại trong lĩnh vực phần mềm văn phòng và hệ điều hành."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Medium",
    "tags": ["Phần mềm nguồn mở", "Phần mềm thương mại"],
    "explanation_prompt": "Phân tích ưu điểm và hạn chế của phần mềm nguồn mở so với phần mềm thương mại."
  },
  {
    "id": "q_cs_11_ud_03_17",
    "topicId": "topic_cs_11_ud_03",
    "stem": "Bạn sử dụng dịch vụ phần mềm trực tuyến để hoàn thành công việc. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Phần mềm chạy trên Internet là phần mềm cho phép sử dụng qua mạng Internet mà không cần phải cài đặt vào máy.",
      "Google Docs, Google Sheets, Google Slides là các ví dụ về phần mềm chạy trên Internet được Google cung cấp.",
      "Ưu điểm của phần mềm chạy trên Internet là người dùng không bị phụ thuộc vào bất cứ thiết bị nào, chỉ cần có kết nối Internet.",
      "Các chương trình viết bằng ngôn ngữ lập trình Python đều có chức năng mạng nên được xem là phần mềm chạy trên Internet."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Medium",
    "tags": ["Phần mềm trực tuyến", "Google Docs"],
    "explanation_prompt": "Giải thích điểm khác biệt giữa phần mềm chạy trên Internet và phần mềm cài đặt."
  },

  // Chủ đề 1: Bài 4: Bên trong máy tính
  {
    "id": "q_cs_11_ud_04_01",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Thiết bị nào sau đây ở bên trong máy tính?",
    "options": ["Bộ xử lí trung tâm (CPU)", "Chuột máy tính", "Bàn phím", "Thiết bị nhớ USB"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần cứng", "Kiến trúc máy tính"],
    "explanation_prompt": "Phân biệt giữa thiết bị bên trong (internal) và bên ngoài (external) máy tính."
  },
  {
    "id": "q_cs_11_ud_04_02",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Thiết bị nào sau đây có thể đặt bên trong hay bên ngoài thân máy tính?",
    "options": ["Bộ nhớ ngoài", "ROM", "Mainboard", "CPU"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phần cứng", "Bộ nhớ"],
    "explanation_prompt": "Giải thích vị trí và chức năng của bộ nhớ ngoài."
  },
  {
    "id": "q_cs_11_ud_04_03",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Chọn phát biểu ĐÚNG về Bộ xử lí trung tâm (CPU).",
    "options": [
      "Là bộ xử lí thực hiện các chương trình máy tính.",
      "Là bộ nhớ dùng để ghi dữ liệu tạm thời.",
      "Là bộ nhớ ghi bằng phương tiện chuyên dùng.",
      "Là bộ nhớ lưu dữ liệu lâu dài."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["CPU", "Kiến trúc máy tính"],
    "explanation_prompt": "Giải thích vai trò của CPU trong hệ thống máy tính."
  },
  {
    "id": "q_cs_11_ud_04_04",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Bộ xử lí trung tâm (CPU) gồm những bộ phận chính nào?",
    "options": ["Bộ số học và logic; Bộ điều khiển", "Bộ điều khiển; ROM", "Bộ số học và logic; RAM", "Thanh ghi; ROM"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["CPU", "Thành phần CPU"],
    "explanation_prompt": "Nêu cấu trúc cơ bản của CPU."
  },
  {
    "id": "q_cs_11_ud_04_05",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Chọn phát biểu ĐÚNG về RAM.",
    "options": [
      "Dùng để ghi dữ liệu tạm thời, dữ liệu bị mất khi tắt máy.",
      "Được ghi bằng phương tiện chuyên dùng, dữ liệu không bị mất khi tắt máy.",
      "Chỉ đọc, không thể ghi hay xóa.",
      "Lưu dữ liệu lâu dài."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["RAM", "Bộ nhớ trong"],
    "explanation_prompt": "Phân biệt giữa RAM và ROM trong chức năng lưu trữ."
  },
  {
    "id": "q_cs_11_ud_04_06",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Chọn phát biểu ĐÚNG về Bộ số học và logic (ALU).",
    "options": [
      "Thực hiện các phép tính số học và logic.",
      "Phối hợp đồng bộ các thiết bị máy tính.",
      "Lưu trữ tạm thời lệnh và dữ liệu.",
      "Là bộ nhớ nhỏ chứa dữ liệu nạp trước."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["CPU", "ALU"],
    "explanation_prompt": "Trình bày vai trò của ALU trong CPU."
  },
  {
    "id": "q_cs_11_ud_04_07",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Chọn phát biểu ĐÚNG về Bộ điều khiển (Control Unit).",
    "options": [
      "Phối hợp đồng bộ các thiết bị máy tính.",
      "Thực hiện phép tính số học và logic.",
      "Lưu trữ tạm thời dữ liệu.",
      "Là bộ nhớ nhỏ chứa dữ liệu nạp trước."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["CPU", "Bộ điều khiển"],
    "explanation_prompt": "Nêu chức năng của Bộ điều khiển trong CPU."
  },
  {
    "id": "q_cs_11_ud_04_08",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Chọn phát biểu ĐÚNG về Thanh ghi.",
    "options": [
      "Lưu trữ tạm thời các lệnh và dữ liệu đang được xử lí.",
      "Thực hiện các phép tính logic.",
      "Phối hợp đồng bộ thiết bị.",
      "Chứa dữ liệu nạp trước từ bộ nhớ trong."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["CPU", "Thanh ghi"],
    "explanation_prompt": "Mô tả chức năng của thanh ghi trong CPU."
  },
  {
    "id": "q_cs_11_ud_04_09",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Chọn phát biểu ĐÚNG về Bộ nhớ đệm (Cache).",
    "options": [
      "Bộ nhớ nhỏ chứa dữ liệu được nạp trước từ bộ nhớ trong.",
      "Thực hiện phép tính logic.",
      "Phối hợp đồng bộ thiết bị.",
      "Lưu trữ dữ liệu lâu dài."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Bộ nhớ đệm", "Hiệu suất CPU"],
    "explanation_prompt": "Giải thích vai trò của bộ nhớ đệm trong tăng tốc xử lí."
  },
  {
    "id": "q_cs_11_ud_04_10",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Để đánh giá tốc độ của Bộ xử lí trung tâm (CPU), người ta thường dùng thành phần nào?",
    "options": ["Tần số đồng hồ xung (GHz)", "Giá tiền", "Dung lượng bộ nhớ", "Phiên bản CPU"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["CPU", "Hiệu suất"],
    "explanation_prompt": "Giải thích ý nghĩa của xung nhịp trong đánh giá tốc độ CPU."
  },
  {
    "id": "q_cs_11_ud_04_11",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Một CPU có tốc độ xung nhịp 3.2 GHz có nghĩa là gì?",
    "options": [
      "Thực hiện 3.2 tỷ chu kỳ mỗi giây.",
      "Phiên bản CPU là 3.2 GHz.",
      "Dung lượng bộ nhớ 3200 GB.",
      "Thực hiện 3200 GHz."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["CPU", "Tốc độ xử lí"],
    "explanation_prompt": "Giải thích mối quan hệ giữa tần số xung nhịp và tốc độ xử lí."
  },
  {
    "id": "q_cs_11_ud_04_12",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Thiết bị nào sau đây thuộc bộ nhớ trong?",
    "options": ["ROM, RAM", "Đĩa cứng, đĩa CD", "Thanh ghi, bộ nhớ đệm", "Bộ điều khiển"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Bộ nhớ", "Phần cứng"],
    "explanation_prompt": "Phân biệt giữa bộ nhớ trong và bộ nhớ ngoài."
  },
  {
    "id": "q_cs_11_ud_04_13",
    "topicId": "topic_cs_11_ud_04",
    "stem": "“ROM” là gì?",
    "options": [
      "Bộ nhớ lưu dữ liệu hệ thống cố định và chương trình khởi động máy.",
      "Bộ nhớ tạm thời khi chạy chương trình.",
      "Bộ nhớ được ghi bằng phương tiện chuyên dùng, có thể ghi và xóa.",
      "Bộ nhớ lưu dữ liệu tạm, mất khi tắt máy."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["ROM", "Bộ nhớ trong"],
    "explanation_prompt": "Nêu chức năng và đặc điểm của ROM trong hệ thống."
  },
  {
    "id": "q_cs_11_ud_04_14",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Thiết bị nào sau đây KHÔNG thuộc bộ nhớ ngoài?",
    "options": ["Thanh ghi", "Đĩa SSD", "Đĩa quang", "Đĩa cứng"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Bộ nhớ ngoài", "Phần cứng"],
    "explanation_prompt": "Phân biệt bộ nhớ ngoài và các thành phần của nó."
  },
  {
    "id": "q_cs_11_ud_04_15",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Bộ nhớ ngoài là gì?",
    "options": [
      "Bộ nhớ lưu dữ liệu lâu dài, dung lượng lớn.",
      "Bộ nhớ cần nguồn nuôi.",
      "Bộ nhớ tạm thời, giá thành rẻ hơn RAM.",
      "Bộ nhớ thực hiện chương trình máy tính."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Bộ nhớ ngoài", "Lưu trữ dữ liệu"],
    "explanation_prompt": "Giải thích vai trò và đặc điểm của bộ nhớ ngoài."
  },
  {
    "id": "q_cs_11_ud_04_16",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Thực hiện phép cộng nhị phân: 110 + 111 = ?",
    "options": ["1101", "1110", "1011", "1100"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Hệ nhị phân", "Số học máy tính"],
    "explanation_prompt": "Trình bày quy tắc cộng hai số trong hệ nhị phân."
  },
  {
    "id": "q_cs_11_ud_04_17",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Số nhị phân 10011 bằng bao nhiêu trong hệ thập phân?",
    "options": ["19", "18", "17", "16"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Hệ đếm", "Chuyển đổi hệ số"],
    "explanation_prompt": "Hướng dẫn cách đổi từ hệ nhị phân sang hệ thập phân."
  },
  {
    "id": "q_cs_11_ud_04_18",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Một người dùng đang nâng cấp máy tính cá nhân để cải thiện hiệu suất. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "CPU (Bộ xử lí trung tâm) được cấu tạo từ Bộ số học và Logic (ALU) và Bộ điều khiển (Control Unit).",
      "Bộ nhớ RAM là bộ nhớ có thể ghi được, dùng để ghi dữ liệu tạm thời khi chạy chương trình nhưng không bị xóa khi tắt máy.",
      "Bộ nhớ ngoài (ổ đĩa cứng, đĩa mềm, đĩa rắn) dùng để lưu trữ dữ liệu lâu dài và không cần nguồn nuôi.",
      "Tốc độ của CPU được đánh giá thông qua tần số xung nhịp, thường là GHz."
    ],
    "answerIndices": [0, 2, 3],
    "difficulty": "Medium",
    "tags": ["Kiến trúc máy tính", "CPU", "Bộ nhớ", "Hiệu suất"],
    "explanation_prompt": "Giải thích vì sao RAM mất dữ liệu khi tắt máy và vai trò của CPU, bộ nhớ ngoài."
  },
  {
    "id": "q_cs_11_ud_04_19",
    "topicId": "topic_cs_11_ud_04",
    "stem": "Trong một buổi thực hành về kiến trúc máy tính, nhóm học sinh quan sát cách các phép toán logic được mô phỏng bằng mạch điện tử. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Mạch logic là mạch điện tử có đầu vào và đầu ra chỉ nhận hai giá trị logic: 0 (tắt) và 1 (bật).",
      "Phép phủ định (NOT) biến giá trị logic đầu vào thành giá trị ngược lại.",
      "Mạch logic AND có thể được mô phỏng bằng cách mắc nối tiếp hai rơ-le K1 và K2 với một bóng đèn.",
      "Mạch logic OR chỉ sáng (nhận giá trị 1) khi cả hai đầu vào cùng bằng 1."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Medium",
    "tags": ["Kiến trúc máy tính", "Mạch logic", "Phép toán logic"],
    "explanation_prompt": "Phân tích nguyên lí hoạt động của các cổng logic cơ bản: AND, OR, NOT."
  },


  // Chủ đề 1: Bài 5: Kết nối máy tính với thiết bị số
  {
    "id": "q_cs_11_ud_05_01",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Thiết bị nào sau đây là thiết bị ra?",
    "options": ["Màn hình", "Bàn phím", "Chuột", "Máy quét ảnh"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Thiết bị ra", "Phần cứng máy tính"],
    "explanation_prompt": "Phân biệt giữa thiết bị vào (input) và thiết bị ra (output)."
  },
  {
    "id": "q_cs_11_ud_05_02",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Màn hình KHÔNG sử dụng loại công nghệ nào sau đây?",
    "options": ["Công nghệ VGA", "Công nghệ CRT", "Công nghệ LCD", "Công nghệ LED"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Màn hình", "Thiết bị ra", "Công nghệ hiển thị"],
    "explanation_prompt": "Giải thích công nghệ VGA không phải là công nghệ màn hình mà là chuẩn kết nối."
  },
  {
    "id": "q_cs_11_ud_05_03",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Thông số nào sau đây KHÔNG là thông số chung của màn hình?",
    "options": [
      "Phương thức kết nối (có dây hay không dây)",
      "Kích thước",
      "Độ phân giải",
      "Khả năng thể hiện màu"
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Màn hình", "Thông số kỹ thuật"],
    "explanation_prompt": "Nhận biết các thông số đặc trưng của màn hình hiển thị."
  },
  {
    "id": "q_cs_11_ud_05_04",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Chọn phát biểu ĐÚNG về thông số 'độ phân giải' của màn hình.",
    "options": [
      "Số điểm ảnh theo chiều ngang và chiều dọc",
      "Độ dài đường chéo của màn hình, tính theo inch",
      "Số lần hiển thị hình ảnh trong một giây",
      "Khoảng thời gian cần thiết để đổi màu một điểm ảnh"
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Màn hình", "Độ phân giải", "Thiết bị ra"],
    "explanation_prompt": "Giải thích ý nghĩa của độ phân giải và sự khác biệt với tần số quét."
  },
  {
    "id": "q_cs_11_ud_05_05",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Cổng trong hình 5a là cổng gì?",
    "options": ["Cổng VGA", "Cổng HDMI", "Cổng USB", "Cổng COM"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Cổng kết nối", "Thiết bị hiển thị", "VGA"],
    "explanation_prompt": "Phân biệt đặc điểm nhận dạng của các loại cổng phổ biến."
  },
  {
    "id": "q_cs_11_ud_05_06",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Cổng trong hình 5b là cổng gì?",
    "options": ["Cổng HDMI", "Cổng Paralel", "Cổng USB", "Cổng COM"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Cổng kết nối", "HDMI", "Truyền dữ liệu"],
    "explanation_prompt": "Nhận dạng cổng HDMI – cổng truyền tín hiệu hình ảnh và âm thanh chất lượng cao."
  },
  {
    "id": "q_cs_11_ud_05_07",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Cổng trong hình 5c là cổng gì?",
    "options": ["Cổng USB", "Cổng Paralel", "Cổng PS/2", "Cổng COM"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["USB", "Cổng kết nối", "Thiết bị ngoại vi"],
    "explanation_prompt": "Nhận dạng cổng USB và chức năng của nó trong truyền dữ liệu và cấp nguồn."
  },
  {
    "id": "q_cs_11_ud_05_08",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Cổng trong hình 5d là cổng gì?",
    "options": ["Cổng mạng", "Cổng VGA", "Cổng USB", "Cổng HDMI"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Cổng mạng", "Ethernet", "Kết nối LAN"],
    "explanation_prompt": "Mô tả chức năng và hình dạng đặc trưng của cổng mạng RJ-45."
  },
  {
    "id": "q_cs_11_ud_05_09",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Kiểu kết nối nào sau đây KHÔNG dùng để kết nối Điện thoại thông minh với máy tính?",
    "options": [
      "Kết nối qua cáp VGA",
      "Kết nối qua Bluetooth",
      "Kết nối qua cáp USB",
      "Kết nối qua Wi-Fi"
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Kết nối thiết bị", "Điện thoại", "Bluetooth", "Wi-Fi", "USB"],
    "explanation_prompt": "Giải thích các phương thức kết nối hiện đại giữa thiết bị di động và máy tính."
  },
  {
    "id": "q_cs_11_ud_05_10",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Để kết nối một thiết bị số với máy tính, ta cần làm gì?",
    "options": [
      "Tìm hiểu tài liệu kĩ thuật để nắm được các thông số và cách kết nối",
      "Tìm hiểu giá tiền của thiết bị số",
      "Tìm hiểu nơi sản xuất của thiết bị số",
      "Tìm nơi bán thiết bị số để mua"
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Kết nối thiết bị", "Phần cứng", "Kĩ năng sử dụng thiết bị"],
    "explanation_prompt": "Giải thích tầm quan trọng của việc đọc tài liệu kỹ thuật trước khi kết nối thiết bị."
  },
  {
    "id": "q_cs_11_ud_05_11",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Một cửa hàng bán lẻ muốn nâng cấp hệ thống quản lí bán hàng, cần trang bị các thiết bị số phù hợp. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Máy đọc mã vạch là thiết bị vào giúp nhập thông tin sản phẩm.",
      "Cần có máy in laser để in hóa đơn nhanh và chất lượng.",
      "Có thể kết nối máy in với máy tính qua mạng (có dây hoặc không dây) để dùng chung.",
      "Màn hình Full HD 1920×1080 pixel là đủ để hiển thị thông tin bán hàng rõ ràng."
    ],
    "answerIndices": [0, 2, 3],
    "difficulty": "Medium",
    "tags": ["Thiết bị vào/ra", "Máy in", "Kết nối mạng"],
    "explanation_prompt": "Phân tích chức năng của thiết bị vào/ra trong ứng dụng thực tế quản lí bán hàng."
  },
  {
    "id": "q_cs_11_ud_05_12",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Một công ty vừa mua một lô máy tính mới và cần lắp đặt các thiết bị ngoại vi cơ bản. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Có thể kết nối bàn phím và chuột với máy tính bằng cổng USB.",
      "Cổng HDMI là phương thức truyền đồng thời cả âm thanh và hình ảnh.",
      "Nếu sử dụng chuột không dây Bluetooth, cần phải ghép đôi (pairing) thiết bị trước khi sử dụng.",
      "Cổng mạng (Ethernet) có thể dùng để kết nối bàn phím hoặc chuột."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Medium",
    "tags": ["Thiết bị ngoại vi", "Chuột", "Bàn phím", "Kết nối không dây"],
    "explanation_prompt": "Nhận biết các loại cổng kết nối phổ biến và cách thức hoạt động."
  },
  {
    "id": "q_cs_11_ud_05_13",
    "topicId": "topic_cs_11_ud_05",
    "stem": "Một nhóm sinh viên đang làm dự án cần kết nối máy tính với các thiết bị số khác nhau. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Khi kết nối máy ảnh số với máy tính qua cáp USB, nếu máy ảnh hỗ trợ chế độ 'USB mode, Mass Storage' thì bộ nhớ của máy ảnh sẽ được chia sẻ qua cổng USB.",
      "Bluetooth là phương thức kết nối không dây, thường chỉ hoạt động hiệu quả trong phạm vi khoảng cách gần (dưới 10m).",
      "Cổng USB là loại cổng kết nối truyền tải dữ liệu tuần tự, đa năng, giúp kết nối máy tính với nhiều loại thiết bị ngoại vi khác nhau.",
      "Cổng HDMI chỉ dùng để truyền tải tín hiệu video độ phân giải cao, không truyền tải âm thanh."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Hard",
    "tags": ["Kết nối thiết bị", "USB", "Bluetooth", "HDMI"],
    "explanation_prompt": "Giải thích các chuẩn kết nối phổ biến giữa máy tính và thiết bị số."
  },

  // Chủ đề 2: Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet
  {
    "id": "q_cs_11_ud_06_01",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Hãy chọn nhà cung cấp ĐÚNG cho dịch vụ “OneDrive”.",
    "options": ["Microsoft", "Google", "Apple", "Dropbox"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Dịch vụ lưu trữ", "OneDrive", "Nhận biết"],
    "explanation_prompt": "Giải thích vì sao OneDrive thuộc hệ sinh thái của Microsoft."
  },
  {
    "id": "q_cs_11_ud_06_02",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Hãy chọn phát biểu ĐÚNG về tính năng “Chia sẻ thư mục, tệp trên ổ đĩa trực tuyến”.",
    "options": [
      "Cho phép chia sẻ thư mục và tệp cho người khác.",
      "Cho phép tạo mới thư mục, tệp trên ổ đĩa trực tuyến.",
      "Cho phép quản lí, sắp xếp thư mục, tệp trên ổ đĩa trực tuyến.",
      "Cho phép tải các tệp từ máy tính lên ổ đĩa trực tuyến để lưu trữ và sử dụng."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Lưu trữ trực tuyến", "Chia sẻ tệp"],
    "explanation_prompt": "Phân biệt chức năng 'chia sẻ' với các thao tác 'tạo mới' hay 'tải lên'."
  },
  {
    "id": "q_cs_11_ud_06_03",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Giáo viên chủ nhiệm chia sẻ tệp Excel trên Google Drive để học sinh nhập dữ liệu. Quyền nào cần được cấp để học sinh có thể chỉnh sửa nội dung?",
    "options": ["Người chỉnh sửa", "Người xem", "Người nhận xét", "Người cập nhật"],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Google Drive", "Quyền chia sẻ"],
    "explanation_prompt": "Phân tích sự khác biệt giữa quyền 'Người xem', 'Nhận xét' và 'Chỉnh sửa'."
  },
  {
    "id": "q_cs_11_ud_06_04",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Thao tác nào sau đây giúp lưu trữ tệp tin lên Google Drive?",
    "options": [
      "Nhấn chọn +Mới → Chọn 'Tải tệp lên' → Chọn tệp → Nhấn Open",
      "Nhấn chọn +Mới → Chọn 'Tải thư mục lên' → Chọn tệp → Nhấn Open",
      "Nhấn chọn +Mới → Chọn 'Thư mục mới' → Chọn tệp → Nhấn Open",
      "Nhấn chọn +Mới → Chọn 'Lưu trữ tệp' → Chọn tệp → Nhấn Open"
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Google Drive", "Tải tệp lên"],
    "explanation_prompt": "Hướng dẫn thao tác cơ bản để tải tệp lên Drive."
  },
  {
    "id": "q_cs_11_ud_06_05",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Thao tác nào sau đây giúp chia sẻ tệp trên Google Drive để người khác chỉ được xem mà không được chỉnh sửa?",
    "options": [
      "Nhấn chuột phải vào tệp → Chọn 'Chia sẻ' → Chọn quyền 'Người xem' → Nhấn Gửi",
      "Nhấn chuột phải vào tệp → Chọn 'Chia sẻ' → Chọn quyền 'Người chỉnh sửa' → Nhấn Gửi",
      "Nhấn chuột phải vào tệp → Chọn 'Chia sẻ' → Chọn quyền 'Người cập nhật' → Nhấn Gửi",
      "Nhấn chuột phải vào tệp → Chọn 'Chia sẻ' → Chọn quyền 'Người theo dõi' → Nhấn Gửi"
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Google Drive", "Chia sẻ tệp"],
    "explanation_prompt": "Giải thích tác dụng của quyền 'Người xem' trong chia sẻ tệp."
  },
  {
    "id": "q_cs_11_ud_06_06",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Dịch vụ nào dưới đây KHÔNG phải là dịch vụ lưu trữ trực tuyến?",
    "options": ["Microsoft Word", "Microsoft OneDrive", "Dropbox", "Google Drive"],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Phân biệt dịch vụ", "Đám mây"],
    "explanation_prompt": "Nhận biết sự khác biệt giữa ứng dụng xử lý văn bản và dịch vụ lưu trữ trực tuyến."
  },
  {
    "id": "q_cs_11_ud_06_07",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Khi tải tệp tin lên Google Drive, vì sao cần kiểm tra quyền chia sẻ của tệp tin đó?",
    "options": [
      "Để đảm bảo tệp tin được bảo mật, chỉ người được phép mới truy cập.",
      "Để tệp tin có thể tự động sao lưu và khôi phục.",
      "Để chia sẻ tệp với toàn bộ danh bạ email.",
      "Để tệp tin không bị mất sau khi tải lên."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Bảo mật", "Google Drive"],
    "explanation_prompt": "Nêu vai trò của kiểm tra quyền chia sẻ trong bảo mật dữ liệu trực tuyến."
  },
  {
    "id": "q_cs_11_ud_06_08",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Trong quá trình làm việc nhóm bằng Google Drive, các nhận định sau đây đúng hay sai? (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Việc tải tệp tin lên ổ đĩa trực tuyến chỉ có thể thực hiện trên máy tính, không thể trên điện thoại.",
      "Các nhà cung cấp lưu trữ trực tuyến thường cho miễn phí một dung lượng nhất định.",
      "Việc quản lí và sắp xếp tệp tin, thư mục là chức năng cơ bản của dịch vụ lưu trữ trực tuyến.",
      "Người sở hữu tệp có thể thiết lập quyền xem, nhận xét và chỉnh sửa khi chia sẻ."
    ],
    "answerIndices": [1, 2, 3],
    "difficulty": "Medium",
    "tags": ["Google Drive", "Lưu trữ đám mây"],
    "explanation_prompt": "Phân tích các chức năng cơ bản và khả năng chia sẻ tệp trong Google Drive."
  },
  {
    "id": "q_cs_11_ud_06_09",
    "topicId": "topic_cs_11_ud_06",
    "stem": "Nhóm của An cần không gian lưu trữ và chia sẻ tài liệu để cùng làm việc. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Dịch vụ lưu trữ trực tuyến giúp vượt qua rào cản khoảng cách và thiết bị.",
      "Có thể tải tệp tin lên ổ đĩa trực tuyến bằng cách nháy nút '+ Mới' trên giao diện dịch vụ.",
      "Người dùng chỉ có duy nhất Quyền xem khi chia sẻ tệp.",
      "Người dùng có thể tạo mới, lưu trữ, chia sẻ tệp và thư mục khi dùng dịch vụ này."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Medium",
    "tags": ["Hợp tác trực tuyến", "Google Drive"],
    "explanation_prompt": "Phân tích lợi ích của lưu trữ trực tuyến và quyền truy cập tệp trong làm việc nhóm."
  },

  // Chủ đề 2: Bài 7: Thực hành tìm kiếm thông tin trên Internet
  {
    "id": "q_cs_11_ud_07_01",
    "topicId": "topic_cs_11_ud_07",
    "stem": "Tại sao việc sử dụng từ khóa chính xác khi tìm kiếm thông tin trên Internet lại quan trọng?",
    "options": [
      "Giúp kết quả tìm kiếm chính xác và liên quan hơn đến nhu cầu.",
      "Giúp hiển thị nhiều quảng cáo hơn.",
      "Giúp trình duyệt hoạt động nhanh hơn.",
      "Giúp giảm số lượng kết quả tìm kiếm."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Tìm kiếm thông tin", "Từ khóa", "Thực hành Internet"],
    "explanation_prompt": "Giải thích vai trò của việc lựa chọn từ khóa chính xác trong quá trình tìm kiếm trực tuyến."
  },
  {
    "id": "q_cs_11_ud_07_02",
    "topicId": "topic_cs_11_ud_07",
    "stem": "Việc sử dụng thêm từ khóa “filetype:pdf” giúp người dùng thu hẹp phạm vi tìm kiếm như thế nào?",
    "options": [
      "Chỉ hiển thị kết quả là các trang web có chứa tệp PDF.",
      "Giới hạn kết quả tìm kiếm chỉ hiển thị hình ảnh.",
      "Hiển thị tất cả các trang web có chứa từ 'PDF'.",
      "Chỉ hiển thị kết quả là các video."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Kĩ năng số", "Tìm kiếm nâng cao", "Google Search"],
    "explanation_prompt": "Mô tả tác dụng của cú pháp 'filetype:' trong công cụ tìm kiếm."
  },
  {
    "id": "q_cs_11_ud_07_03",
    "topicId": "topic_cs_11_ud_07",
    "stem": "Khi tìm kiếm tài liệu trực tuyến và kết quả trả về quá nhiều, làm thế nào để nhanh chóng xác định tài liệu phù hợp nhất?",
    "options": [
      "Sử dụng bộ lọc để chỉ tìm kiếm các trang web uy tín hoặc học thuật.",
      "Chọn trang web đầu tiên trong danh sách kết quả.",
      "Chọn kết quả có tiêu đề hấp dẫn nhất.",
      "Thử nhiều từ khóa khác nhau trong cùng một lần tìm kiếm."
    ],
    "answerIndices": [0],
    "difficulty": "Hard",
    "tags": ["Kĩ năng số", "Tìm kiếm học thuật", "Đánh giá thông tin"],
    "explanation_prompt": "Giải thích cách sử dụng bộ lọc hoặc tiêu chí đánh giá để chọn thông tin đáng tin cậy."
  },
  {
    "id": "q_cs_11_ud_07_04",
    "topicId": "topic_cs_11_ud_07",
    "stem": "Một nhóm học sinh chuẩn bị tham gia cuộc thi khoa học và cần tra cứu thông tin mới nhất từ Internet. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Có thể sử dụng công cụ tìm kiếm như Google để nhập từ khóa và nhận kết quả nhanh chóng.",
      "Khi kết quả tìm kiếm chưa đúng ý, nên đổi từ khóa khác để tìm hiệu quả hơn.",
      "Không cần đọc lại kết quả tìm kiếm, chỉ cần nhấp vào liên kết đầu tiên là đủ.",
      "Có thể tìm thông tin bằng cách gõ từ khóa hoặc sử dụng giọng nói."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Medium",
    "tags": ["Kĩ năng số", "Tìm kiếm thông tin"],
    "explanation_prompt": "Phân tích các thao tác đúng khi tìm kiếm và đánh giá kết quả trên Internet."
  },
  {
    "id": "q_cs_11_ud_07_05",
    "topicId": "topic_cs_11_ud_07",
    "stem": "Một học sinh muốn tìm tài liệu tuyển sinh của trường đại học dưới dạng tệp PDF để tải về máy. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Có thể thêm cụm 'filetype:pdf' sau từ khóa để chỉ tìm tệp PDF.",
      "Đặt từ khóa cần tìm trong dấu ngoặc kép giúp kết quả tìm kiếm chính xác hơn.",
      "Có thể lựa chọn tìm theo dạng tin tức, hình ảnh hoặc video để thu hẹp phạm vi tìm kiếm.",
      "Không cần sử dụng dấu ngoặc kép vì kết quả tìm kiếm luôn chính xác."
    ],
    "answerIndices": [0, 1, 2],
    "difficulty": "Medium",
    "tags": ["Tìm kiếm nâng cao", "Internet"],
    "explanation_prompt": "Giải thích tác dụng của 'filetype:' và dấu ngoặc kép trong tìm kiếm nâng cao."
  },

  // Chủ đề 2: Bài 8: Thực hành sử dụng thư điện tử và mạng xã hội
  {
    "id": "q_cs_11_ud_08_01",
    "topicId": "topic_cs_11_ud_08",
    "stem": "Dấu hiệu nào sau đây để biết thư thuộc loại quan trọng?",
    "options": [
      "Thư có đánh dấu sao (hoặc cờ).",
      "Thư có tiêu đề màu đỏ.",
      "Thư có biểu tượng tệp đính kèm.",
      "Thư được gửi từ người lạ."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Email", "Gmail", "Đánh dấu thư"],
    "explanation_prompt": "Trong Gmail, thư được đánh dấu sao hoặc cờ là thư quan trọng."
  },
  {
    "id": "q_cs_11_ud_08_02",
    "topicId": "topic_cs_11_ud_08",
    "stem": "Chọn thao tác ĐÚNG để đánh dấu thư thuộc loại quan trọng trong Gmail.",
    "options": [
      "Vào Hộp thư đến → chọn thư → nháy chuột vào biểu tượng dấu sao.",
      "Vào Hộp thư đến → nháy chuột phải vào thư → chọn 'Đánh dấu quan trọng'.",
      "Vào Hộp thư đến → nháy 'Cài đặt' → 'Quản lí thư quan trọng'.",
      "Vào Gmail → chọn thư → nháy 'OK' → nháy biểu tượng dấu sao."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Email", "Gmail", "Thực hành"],
    "explanation_prompt": "Để đánh dấu thư quan trọng, người dùng nháy chuột vào biểu tượng dấu sao trong danh sách thư."
  },
  {
    "id": "q_cs_11_ud_08_03",
    "topicId": "topic_cs_11_ud_08",
    "stem": "Mục đích của việc sử dụng nhãn (Label) trong Gmail là gì?",
    "options": [
      "Sắp xếp, phân loại thư, giúp tiết kiệm thời gian tìm kiếm, tránh thất lạc thông tin.",
      "Để phân biệt các loại thư với nhau nhưng khó khăn trong việc tìm kiếm.",
      "Tạo cho hộp thư thêm sinh động, thẩm mỹ, thu hút người xem.",
      "Dùng để tránh thất lạc thông tin ở thư cũ nhưng tốn nhiều thời gian tìm kiếm."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Email", "Gmail", "Nhãn"],
    "explanation_prompt": "Nhãn (Label) giúp người dùng sắp xếp, phân loại và quản lí thư một cách khoa học."
  },
  {
    "id": "q_cs_11_ud_08_04",
    "topicId": "topic_cs_11_ud_08",
    "stem": "Chọn thao tác ĐÚNG để tạo nhãn cho thư trong Gmail.",
    "options": [
      "Vào Gmail → Danh sách mở rộng → nháy 'Tạo nhãn mới' → nháy Save.",
      "Vào Gmail → Hộp thư đến → nháy 'Tạo nhãn mới' → nháy Save.",
      "Vào Gmail → mục Cài đặt → nháy 'Nhãn' → chọn 'Tạo nhãn mới' → nháy Save.",
      "Vào Gmail → Tạo nhãn → nháy 'Tạo nhãn mới' → nháy Save."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Email", "Gmail", "Nhãn", "Cài đặt"],
    "explanation_prompt": "Để tạo nhãn mới, vào Gmail → Cài đặt → Nhãn → Tạo nhãn mới."
  },
  {
    "id": "q_cs_11_ud_08_05",
    "topicId": "topic_cs_11_ud_08",
    "stem": "Một học sinh muốn sắp xếp và quản lí các thư quan trọng trong Gmail. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Có thể sử dụng Đánh dấu thư (dấu sao hoặc cờ) để xác định thư quan trọng hoặc chưa đọc.",
      "Chức năng Nhãn (Label) được dùng để sắp xếp, phân loại thư giúp việc tìm kiếm dễ dàng hơn.",
      "Khi xóa thư đã được gán Nhãn, thư đó chỉ bị xóa khỏi hộp thư đến nhưng vẫn giữ Nhãn.",
      "Gmail hỗ trợ tự động xác định và đánh dấu thư thuộc loại quan trọng."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Medium",
    "tags": ["Email", "Gmail", "Đánh dấu", "Nhãn"],
    "explanation_prompt": "Đánh dấu và nhãn giúp phân loại thư; tuy nhiên, nếu xóa thư thì cả nội dung và nhãn đều bị xóa."
  },
  {
    "id": "q_cs_11_ud_08_06",
    "topicId": "topic_cs_11_ud_08",
    "stem": "Một người dùng Facebook muốn bảo vệ quyền riêng tư cá nhân và kiểm soát việc gắn thẻ (tag) bài viết. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Có thể chọn phạm vi chia sẻ bài viết: Công khai, Bạn bè, Bạn bè ngoại trừ…, hoặc Chỉ mình tôi.",
      "Trong mục Trang cá nhân và gắn thẻ, có thể cài đặt ai được đăng bài lên trang cá nhân.",
      "Khi thiết lập chế độ gắn thẻ, bắt buộc phải cho phép tất cả bạn bè đều được gắn thẻ.",
      "Chế độ Xem lại trong Trang cá nhân và gắn thẻ giúp người dùng kiểm tra bài viết có gắn thẻ trước khi xuất hiện."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Medium",
    "tags": ["Mạng xã hội", "Facebook", "Bảo mật", "Gắn thẻ"],
    "explanation_prompt": "Cài đặt quyền riêng tư và chế độ xem lại giúp kiểm soát người có thể xem và gắn thẻ bài viết."
  },

  // Chủ đề 3: Bài 9: Giao tiếp an toàn trên Internet
  {
    "id": "q_cs_11_ud_09_01",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Những nguyên tắc nhận biết và phòng tránh lừa đảo trên không gian số là gì?",
    "options": [
      "Hãy chậm lại; Kiểm tra ngay; Dừng lại, không gửi.",
      "Hãy thực hiện; Kiểm tra ngay; Dừng lại, không gửi.",
      "Hãy chậm lại; Hãy thực hiện; Làm theo yêu cầu.",
      "Hãy thực hiện; Hãy chậm lại; Làm theo yêu cầu."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Lừa đảo trực tuyến", "An toàn số"],
    "explanation_prompt": "Nguyên tắc 3 bước cơ bản: Hãy chậm lại – Kiểm tra ngay – Dừng lại, không gửi."
  },
  {
    "id": "q_cs_11_ud_09_02",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Khi gặp tình huống lừa đảo về hỗ trợ kĩ thuật, em sẽ áp dụng nguyên tắc 'HÃY CHẬM LẠI!' như thế nào?",
    "options": [
      "Hãy tự đặt câu hỏi khi thông báo hiện lên có vẻ rất khẩn cấp.",
      "Các đơn vị hỗ trợ công nghệ hợp pháp sẽ không yêu cầu thanh toán khi dịch vụ chưa được thực hiện.",
      "Thử tìm kiếm tên công ty hoặc số điện thoại kèm từ khóa như 'lừa đảo'.",
      "Thực hiện các yêu cầu để phòng tránh chuyện trở nên phức tạp."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Lừa đảo trực tuyến", "Kĩ năng phòng tránh"],
    "explanation_prompt": "Nguyên tắc 'Hãy chậm lại' giúp tránh phản ứng vội trước các thông báo khẩn cấp giả mạo."
  },
  {
    "id": "q_cs_11_ud_09_03",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Khi gặp tình huống lừa đảo về hỗ trợ kĩ thuật, em sẽ áp dụng nguyên tắc 'KIỂM TRA NGAY!' như thế nào?",
    "options": [
      "Thử tìm kiếm tên công ty hoặc số điện thoại kèm từ khóa như 'lừa đảo' hoặc 'khiếu nại'.",
      "Hãy tự đặt câu hỏi khi thông báo hiện lên có vẻ rất khẩn cấp.",
      "Kiểm tra lại địa chỉ email hoặc số điện thoại của người gửi có thật hay không.",
      "Thực hiện các yêu cầu để tránh sự cố."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["An toàn thông tin", "Lừa đảo trực tuyến"],
    "explanation_prompt": "Nguyên tắc 'Kiểm tra ngay' khuyến khích người dùng xác minh nguồn gốc trước khi tin tưởng thông tin."
  },
  {
    "id": "q_cs_11_ud_09_04",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Khi gặp tình huống lừa đảo qua website giả mạo, em sẽ áp dụng nguyên tắc 'DỪNG LẠI, KHÔNG GỬI!' như thế nào?",
    "options": [
      "Không vội thanh toán mà chưa xác minh, nhất là với yêu cầu chuyển tiền nhanh.",
      "Kiểm tra các đánh giá của người dùng, độ tin cậy của trang web.",
      "Cung cấp thông tin thẻ hoặc tài khoản.",
      "Thực hiện theo yêu cầu để nhận khuyến mãi."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["An toàn mạng", "Thương mại điện tử", "Lừa đảo trực tuyến"],
    "explanation_prompt": "Nguyên tắc 'Dừng lại, không gửi' nhấn mạnh việc không cung cấp thông tin cá nhân khi chưa xác thực."
  },
  {
    "id": "q_cs_11_ud_09_05",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Phương thức nào sau đây KHÔNG phù hợp khi gặp thông báo tin xấu có dấu hiệu lừa đảo?",
    "options": [
      "Tìm cách liên hệ trực tiếp với người gửi để làm rõ.",
      "Hãy đặt những câu hỏi để làm rõ vấn đề.",
      "Không đồng ý giao dịch bất thường mà không có văn bản cụ thể.",
      "Liên lạc với tổ chức chính thức để kiểm chứng thông tin."
    ],
    "answerIndices": [0],
    "difficulty": "Medium",
    "tags": ["Lừa đảo", "Phản ứng an toàn"],
    "explanation_prompt": "Không nên liên hệ lại với người gửi lạ, vì đó có thể là kẻ lừa đảo."
  },
  {
    "id": "q_cs_11_ud_09_06",
    "topicId": "topic_cs_11_ud_09",
    "stem": "An nhận được tin nhắn từ tài khoản lạ yêu cầu nhấn vào đường link và cung cấp mật khẩu. Phương án nào là KHÔNG phù hợp?",
    "options": [
      "Bình tĩnh, nhấn vào đường link và làm theo hướng dẫn.",
      "Không nhấn vào đường link lạ và cung cấp thông tin cá nhân.",
      "Tự đặt câu hỏi khi tin nhắn hiện lên có vẻ khẩn cấp.",
      "Tìm kiếm tên tài khoản hoặc số điện thoại kèm từ khóa 'lừa đảo'."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Lừa đảo qua mạng", "Phishing"],
    "explanation_prompt": "Không nên nhấn vào đường link lạ vì đó là hình thức lừa đảo lấy cắp thông tin."
  },
  {
    "id": "q_cs_11_ud_09_07",
    "topicId": "topic_cs_11_ud_09",
    "stem": "“Tuân thủ luật pháp Việt Nam, tôn trọng quyền và lợi ích hợp pháp của tổ chức, cá nhân” là nội hàm của quy tắc nào?",
    "options": [
      "Quy tắc tôn trọng, tuân thủ pháp luật.",
      "Quy tắc lành mạnh.",
      "Quy tắc an toàn, bảo mật thông tin.",
      "Quy tắc trách nhiệm."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Ứng xử số", "Quy tắc pháp luật"],
    "explanation_prompt": "Quy tắc tôn trọng, tuân thủ pháp luật yêu cầu người dùng hành xử đúng chuẩn mực và quy định."
  },
  {
    "id": "q_cs_11_ud_09_08",
    "topicId": "topic_cs_11_ud_09",
    "stem": "“Mọi hành vi, ứng xử trên mạng xã hội phải phù hợp với giá trị đạo đức, văn hóa truyền thống tốt đẹp của dân tộc Việt Nam.” Là nội hàm của quy tắc nào?",
    "options": [
      "Quy tắc lành mạnh.",
      "Quy tắc tôn trọng, tuân thủ pháp luật.",
      "Quy tắc an toàn, bảo mật thông tin.",
      "Quy tắc trách nhiệm."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Ứng xử mạng", "Văn hóa số"],
    "explanation_prompt": "Quy tắc lành mạnh hướng tới hành vi đúng mực, phù hợp đạo đức và văn hóa."
  },
  {
    "id": "q_cs_11_ud_09_09",
    "topicId": "topic_cs_11_ud_09",
    "stem": "“Phải tuân thủ quy định về bảo vệ an toàn và bảo mật thông tin cá nhân, tổ chức” là nội hàm của quy tắc nào?",
    "options": [
      "Quy tắc an toàn, bảo mật thông tin.",
      "Quy tắc tôn trọng, tuân thủ pháp luật.",
      "Quy tắc lành mạnh.",
      "Quy tắc trách nhiệm."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Bảo mật", "An toàn thông tin"],
    "explanation_prompt": "Quy tắc an toàn, bảo mật thông tin giúp người dùng bảo vệ dữ liệu cá nhân và tổ chức."
  },
  {
    "id": "q_cs_11_ud_09_10",
    "topicId": "topic_cs_11_ud_09",
    "stem": "“Cần chịu trách nhiệm về hành vi ứng xử trên mạng xã hội, hợp tác với cơ quan chức năng khi có yêu cầu” là nội hàm của quy tắc nào?",
    "options": [
      "Quy tắc trách nhiệm.",
      "Quy tắc tôn trọng, tuân thủ pháp luật.",
      "Quy tắc lành mạnh.",
      "Quy tắc an toàn, bảo mật thông tin."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Trách nhiệm số", "Ứng xử mạng"],
    "explanation_prompt": "Quy tắc trách nhiệm yêu cầu người dùng chịu trách nhiệm với hành vi của mình trên môi trường mạng."
  },
  {
    "id": "q_cs_11_ud_09_11",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Việc nào NÊN LÀM khi tham gia mạng xã hội?",
    "options": [
      "Quản lí, bảo mật thông tin cá nhân, thông báo kịp thời khi bị mất quyền kiểm soát.",
      "Đăng tải nội dung vi phạm pháp luật.",
      "Tung tin giả, sai sự thật.",
      "Sử dụng từ ngữ kích động, phản cảm."
    ],
    "answerIndices": [0],
    "difficulty": "Easy",
    "tags": ["Ứng xử mạng", "An toàn số"],
    "explanation_prompt": "Người dùng nên bảo mật thông tin cá nhân và sử dụng mạng xã hội một cách tích cực, đúng pháp luật."
  },
  {
    "id": "q_cs_11_ud_09_12",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Việc nào NÊN LÀM khi tham gia mạng xã hội? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Quảng cáo, kinh doanh dịch vụ trái phép.",
      "Sử dụng ngôn từ gây thù hận, phản cảm.",
      "Tung tin sai sự thật, xuyên tạc.",
      "Chia sẻ thông tin tích cực, chính thống."
    ],
    "answerIndices": [3],
    "difficulty": "Easy",
    "tags": ["Ứng xử mạng", "Đạo đức số"],
    "explanation_prompt": "Không nên tung tin sai lệch hoặc có lời lẽ phản cảm trên mạng xã hội."
  },
  {
    "id": "q_cs_11_ud_09_13",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Một người bán hàng trực tuyến bị kẻ xấu lừa đảo bằng cách gửi tin nhắn yêu cầu cung cấp thông tin tài khoản ngân hàng để nhận giải thưởng. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Việc này là hình thức lừa đảo dưới dạng thông báo thông tin tốt.",
      "Người bán hàng nên liên lạc trực tiếp với tổ chức hay doanh nghiệp để xác minh thông tin.",
      "Khi nhận được tin nhắn như vậy, nên thực hiện chuyển khoản ngay để không bỏ lỡ cơ hội.",
      "Một trong các nguyên tắc cốt lõi để phòng tránh lừa đảo là 'Dừng lại, không gửi!'."
    ],
    "answerIndices": [0, 1, 3],
    "difficulty": "Medium",
    "tags": ["Lừa đảo trực tuyến", "Nhận biết lừa đảo"],
    "explanation_prompt": "Người dùng cần cảnh giác với tin nhắn giả mạo; luôn xác minh và không gửi thông tin cá nhân."
  },
  {
    "id": "q_cs_11_ud_09_14",
    "topicId": "topic_cs_11_ud_09",
    "stem": "Một nhóm học sinh đang thực hiện dự án truyền thông xã hội về bảo vệ môi trường và cần tuân thủ các quy tắc ứng xử trên mạng. (Chọn tất cả các phát biểu đúng)",
    "options": [
      "Nên dùng lời lẽ mạnh mẽ, thậm chí gay gắt khi tranh luận để thể hiện rõ quan điểm.",
      "Việc đăng tải thông tin cá nhân của người khác là hành vi 'Không nên' vì có thể vi phạm pháp luật.",
      "Cần tuân thủ quy tắc 'Tôn trọng, tuân thủ pháp luật' trong quy tắc ứng xử trên môi trường số.",
      "Nên chia sẻ thông tin chính thống, tin cậy có nguồn gốc rõ ràng."
    ],
    "answerIndices": [1, 2, 3],
    "difficulty": "Medium",
    "tags": ["Ứng xử số", "Dự án truyền thông", "Đạo đức số"],
    "explanation_prompt": "Học sinh cần ứng xử có văn hóa, tôn trọng pháp luật và chia sẻ thông tin chính thống."
  }
];
