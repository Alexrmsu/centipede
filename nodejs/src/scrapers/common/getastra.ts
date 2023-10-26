import { cloudflare } from "../../libs/cloudflare";

cloudflare("https://www.getastra.com/").then((res: any) => {
    console.log(res);
})