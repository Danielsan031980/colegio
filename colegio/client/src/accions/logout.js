const logout = async (data) => {
    try {
        console.log("sali")
        const res = await fetch('/api/logout', {
            method: 'POST',
            
        });
        const json = await res.json();
        if (!res.ok) {
            return { success: false, data: json };
        }
        return { success: true, data: json };
    } catch (e) {
        
        return { success: false, data: { errors: { error: e } } };
    }
};

export default logout;
