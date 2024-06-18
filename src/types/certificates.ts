export interface CertificateEvent {
    date: Date | string;
    title: string;
    description?: string;
    icon: string;
    link?: {
        text: string;
        url: string;
    };
}

export type Certificates = Array<CertificateEvent>;
