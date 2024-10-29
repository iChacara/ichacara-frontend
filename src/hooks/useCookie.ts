import { cookies } from 'next/headers';

export const getCookie = (cookieName: string): string | null => {
    const cookieStore = cookies();
    const cookie = cookieStore.get(cookieName);
    return cookie ? cookie.value : null;
};

export default getCookie;
