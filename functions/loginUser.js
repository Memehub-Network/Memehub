exports = async
function(payload) {
    const {
        email, password
    } = payload;

    try {
        // Authenticate the user
        const user = await context.auth.login(email, password);

        // Access the user's custom data (assuming it's set)
        const customData = context.user.customData;

        // Create the response object
        const response = {
            status: "success",
            message: "Login successful",
            user: {
                id: user.id,
                username: customData.username || "", // Assuming username is part of customData
                email: user.data.email,
                full_name: customData.full_name || "", // Assuming full_name is part of customData
                avatar_url: customData.avatar_url || "", // Assuming avatar_url is part of customData
                cover_pic_url: customData.cover_pic_url || "", // Assuming cover_pic_url is part of customData
                followers_count: customData.followers_count || 0, // Assuming followers_count is part of customData
                following_count: customData.following_count || 0, // Assuming following_count is part of customData
                is_verified: customData.is_verified || false, // Assuming is_verified is part of customData
                bio: customData.bio || "", // Assuming bio is part of customData
                website: customData.website || "", // Assuming website is part of customData
                post_count: customData.post_count || 0, // Assuming post_count is part of customData
                role: customData.role || "user" // Assuming role is part of customData
            },
            access_token: context.user.customData.accessToken,
            refresh_token: context.user.customData.refreshToken,
            expires_in: 3600
        };

        return response;
    } catch (error) {
        // Failed to log in
        return {
            status: "error",
            message: "Failed to log in. Please check your credentials.",
            access_token: null,
            refresh_token: null,
            expires_in: 0
        };
    }
};