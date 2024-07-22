export type User = {
    id: string;
    created_at: string;
    modified_at: string;
    modified_by: string;
    status: string;
} & UserPost

export type UserPost = {
    username: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    profile_picture?: string;
}