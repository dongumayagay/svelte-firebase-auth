// Reexport your entry components here
import { readable } from "svelte/store"
import { onAuthStateChanged, type Auth, type User } from "firebase/auth"

export const createAuthStore = (auth: Auth) => readable<User | null | undefined>(
    undefined,
    set => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                set(user)
            }
        )
        return () => unsubscribe()
    }
)