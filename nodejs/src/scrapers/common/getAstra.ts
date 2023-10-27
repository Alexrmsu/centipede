import { cloudflare } from "../../libs/cloudflare";

cloudflare("https://www.getastra.com/").then((res: Object): void => {
    console.log(res);
})