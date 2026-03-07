import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FAQ {
    question: string;
    answer: string;
}
export interface Testimonial {
    name: string;
    quote: string;
}
export interface backendInterface {
    addFAQ(question: string, answer: string): Promise<void>;
    addTestimonial(name: string, quote: string): Promise<void>;
    addWaitlistEntry(name: string, email: string): Promise<void>;
    getAllFAQs(): Promise<Array<FAQ>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getWaitlistCount(): Promise<bigint>;
}
