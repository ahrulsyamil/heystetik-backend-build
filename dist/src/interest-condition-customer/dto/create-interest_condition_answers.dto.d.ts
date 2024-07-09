export declare class CreateInterestConditionCustomerDto {
    interest_conditions_id: number;
    userId: number;
    lists: listsType[];
}
type listsType = {
    interest_conditions_answer_id: number;
    interest_conditions_question_id: number;
    answer_description: string;
};
export {};
