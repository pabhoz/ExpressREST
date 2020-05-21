module Policies {

    export function verifyHost(host: string | undefined, hostValue: string) {
        return (host != hostValue) ? false : true;
    }

    export function verifyApiKey(apiKey: string | undefined, keyValue: string) {
        let response = { error: true, msg: "No API Key", status: 403 };

        if (apiKey) {
            if (apiKey !== keyValue) {
                response.status = 401;
                response.msg = "Not a valid API Key";
            } else {
                response.error = false;
            }
        }

        return response;
    }
}

export default Policies;
