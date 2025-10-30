

// Fix: Provide prompt templates used by the Gemini service.
export const SUMMARY_PROMPT_TEMPLATE = `
Nhiệm vụ của bạn là một gia sư AI chuyên nghiệp, hãy tóm tắt kiến thức trọng tâm cho chủ đề "{topicName}" của môn Tin học 11 (Định hướng Tin học ứng dụng).
Nội dung tóm tắt phải súc tích, rõ ràng, chính xác và được trình bày dưới dạng Markdown.
Sử dụng gạch đầu dòng (-) để liệt kê các ý chính và **in đậm** các thuật ngữ quan trọng.
Ví dụ:
- **Hệ điều hành (Operating System):** Là phần mềm hệ thống quản lí...
- **Phần mềm nguồn mở:** Là phần mềm có mã nguồn được công khai...
`;

export const ADAPTIVE_PROMPT_TEMPLATE = `
Bạn là một gia sư AI chuyên về Tin học lớp 11. Nhiệm vụ của bạn là phân tích kết quả bài làm trắc nghiệm của một học sinh và đưa ra những phản hồi mang tính xây dựng, cụ thể và hữu ích.
Dưới đây là lịch sử các câu trả lời của học sinh dưới dạng JSON:
{attempts}

Dựa vào dữ liệu trên, hãy phân tích và trả về một đối tượng JSON DUY NHẤT với cấu trúc chính xác như sau:
{
  "feedback_summary": "string",
  "knowledge_gaps": ["string"],
  "actionable_steps": ["string"]
}

QUY TẮC:
1.  "feedback_summary": Cung cấp một nhận xét tổng quan ngắn gọn, tích cực (khoảng 1-2 câu). Bắt đầu bằng việc khen ngợi điểm mạnh, sau đó đề cập nhẹ nhàng đến phần cần cải thiện. Ví dụ: "Bạn đã nắm rất vững các khái niệm cơ bản về hệ điều hành! Cần chú ý hơn một chút về các lệnh tìm kiếm nâng cao nhé."
2.  "knowledge_gaps": Liệt kê CÁC KHÁI NIỆM CỤ THỂ mà học sinh trả lời sai. Không chỉ nêu tên chủ đề chung. Ví dụ, thay vì nói "Sai về phần cứng", hãy nói "Chưa phân biệt được chức năng của RAM và ROM" hoặc "Nhầm lẫn giữa cổng HDMI và VGA".
3.  "actionable_steps": Đưa ra những GỢI Ý HÀNH ĐỘNG RÕ RÀNG để học sinh cải thiện. Ví dụ: "Đọc lại phần tóm tắt về 'Các loại bộ nhớ trong máy tính'." hoặc "Xem lại video giải thích về 'An toàn trên Internet'."
`;

export const EXPLANATION_PROMPT_TEMPLATE = `
Giải thích chi tiết và rõ ràng cho câu hỏi trắc nghiệm sau đây, tập trung vào việc tại sao đáp án đúng lại đúng và tại sao các đáp án sai lại sai. Giải thích bằng tiếng Việt cho học sinh lớp 11.
Câu hỏi: {question}
Các lựa chọn:
{options}
Đáp án đúng: {correctAnswerText}
Câu trả lời của học sinh: {userAnswerText}

Cung cấp một lời giải thích toàn diện và dễ hiểu.
`;
