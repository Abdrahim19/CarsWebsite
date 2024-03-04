import { BenfitesType, Section } from "../pages/main/models";

export async function fetchFirstSectionData(sectionId: number): Promise<Section | null> {
    const apiUrl = `http://192.168.100.3:8000/api/first-sections/${sectionId}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${apiUrl}`);
        }

        const data = await response.json();
        return data as Section;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function fetchSecondSectionData(): Promise<BenfitesType | null> {
    const apiUrl = `http://192.168.100.3:8000/api/second-sections/1`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${apiUrl}`);
        }

        const data = await response.json();
        return data as BenfitesType;
    } catch (error) {
        console.error(error);
        return null;
    }
}