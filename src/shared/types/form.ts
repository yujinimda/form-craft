export type FieldType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';

// Select, Checkbox, Radio에서 사용하는 개별 옵션
export interface FieldOption {
  id: string;
  value: string; // 옵션에 표시되는 텍스트
}

// 폼에 추가되는 하나의 필드
export interface FormField {
  id: string;
  type: FieldType;
  label: string; // 질문 텍스트
  placeholder: string; // 입력창 안내 텍스트
  required: boolean; // 필수 입력 여부
  options: FieldOption[]; // select, checkbox, radio용 옵션 목록
}