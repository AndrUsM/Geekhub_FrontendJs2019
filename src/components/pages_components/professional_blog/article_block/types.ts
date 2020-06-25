export type PostType = {
    docs: Array<PostDocsType>,
    total: number,
    limit: number,
    page: number,
    pages: number
}

export type PostDocsType = {
    description: string,
    featuredImage: string,
    category: Array<string>,
    tags: Array<string>,
    likesCount: number,
    viewsCount: number,
    _id: string,
    title: string,
    content: string,
    author: AuthorType,
    slug: string
}

export type AuthorType = {
    createdAt: string,
    description: string,
    email: string,
    firstName: string,
    imgUrl?: string,
    lastName: string,
    updatedAt: Date,
    _id: string
}