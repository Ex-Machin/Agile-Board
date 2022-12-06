import { AuthProvider } from "firebase/auth";

export interface Social {
    facebook: AuthProvider,
    google: AuthProvider,
    twitter: AuthProvider,
    github: AuthProvider,
}