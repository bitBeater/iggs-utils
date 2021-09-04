import { ClientRequest, get, IncomingMessage, request, RequestOptions } from 'http'
import { request as httpsRequest, get as httpsGet } from 'https'
import { stringify } from 'querystring';


export interface httpResponse {
    response: IncomingMessage,
    data: string
}

export function httpRequest(reqOpts: RequestOptions | string | URL, body: any): Promise<httpResponse> {




    const retVAl = new Promise<httpResponse>((resolve, reject) => {


        const reqFn = getRequestFn(reqOpts)

        const req = reqFn(reqOpts, (response) => {
            let data = '';
            // a data chunk has been received.
            response.on('data', (chunk) => {
                data += chunk;
            });

            // complete response has been received.
            response.on('end', () => {
                resolve({ response, data })
            });

        }).on("error", (err) => {
            reject(err);
        });

        req.write(body);
        req.flushHeaders();
        req.end();

    });

    return retVAl;
}


function getProtocol(req: RequestOptions | string | URL): 'https' | 'http' {

    let rq = req;

    if (typeof rq === 'string') {
        rq = new URL(rq)
    }

    return rq?.protocol?.replace(/\:/gm, '') as 'https' | 'http'
}

function getRequestFn(req: RequestOptions | string | URL): (options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void) => ClientRequest {
    const protocol = getProtocol(req)

    if (typeof req === 'string' || req instanceof URL) {
        if (protocol === 'http') return get;
        if (protocol === 'https') return httpsGet;
        return get
    }

    if (protocol === 'http') return request;
    if (protocol === 'https') return httpsRequest;

    return request
}

//--------------------------------------------------------------------------------------------------------------------------------

export function objToCookies(obj: any): string {
    let retVal = ''
    let cookies: string[] = []

    for (const key of Object.keys(obj))
        if (obj[key])
            cookies.push(`${key}=${obj[key]}`)

    retVal = cookies.join(';');

    return retVal;
}

export function cookiesToObj(cookiesStr:string): object {
    if(!cookiesStr) return

    let cookiesObj:any = {};
    let cookiesArr=cookiesStr.split(';');

    for (const cookieStr of cookiesArr){
        const [key,value] = cookieStr.split('=');
        cookiesObj[key.trim()]=value.trim();
    }

    return cookiesObj;
}

//---------------------------------------------------------------------------------------------------------------------------------

