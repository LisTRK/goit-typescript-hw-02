export interface UnsplashImage{
    id: string;
    alt_description: string;
    user: {
        first_name: string,
        location: string,
        
        links: {
            html: string
        }
    }
    
    likes: number;
    urls: {
        raw: string,
        small: string,
        full: string,
        regular: string,
        
    };
    
    
}