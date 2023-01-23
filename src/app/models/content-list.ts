import { IContent } from "./icontent";

export class ContentList {
    private _contents: IContent[] = [];

    constructor() {
        this._contents = [];
    }

    get contents(): IContent[] {
        return this._contents;
    }

    addContent(content: IContent) {
        this._contents.push(content);
    }

    getLength(): number {
        return this._contents.length;
    }

    //string method
    toString(index:number):string{
        let output:string = "";
        output += "<h1>" + this._contents[index].title + "</h1>";
        output += "<p>" + this._contents[index].description + "</p>";
        output += "<p>" + this._contents[index].author + "</p>";
        output += "<p>" + this._contents[index].imgSrc + "</p>";
        output += "<p>" + this._contents[index].type + "</p>";
        output += "<p>" + this._contents[index].tags + "</p>";
        return output;
    }

}
