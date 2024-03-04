type Image = {
    first_section_id: number;
    image_path: string;
    created_at: string;
    updated_at: string;
}

export interface Section {
    id: number;
    title: string;
    logo: string;
    created_at: string;
    updated_at: string;
    images: Image[];
}

type Detail =  {
    id: number;
    second_section_id: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
  }
  
  // Define type for the main object
  export interface BenfitesType {
    id: number;
    main_title: string;
    created_at: string;
    updated_at: string;
    details: Detail[];
  }