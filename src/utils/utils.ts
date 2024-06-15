export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const saveLikes = (likes: number[]) => {
    localStorage.setItem('likes', JSON.stringify(likes));
};

export const removeLikes = () => {
    localStorage.removeItem('likes');
};
