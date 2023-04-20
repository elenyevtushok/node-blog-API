lang;
"en" >
    class {
    };
"create-blog content" >
    action;
"/blogs";
method = "POST" >
;
for ( = "title" > Blog; title; )
    : /label>
        < input;
type = "text";
id = "title";
name = "title";
required >
;
for ( = "snippet" > Blog; snippet; )
    : /label>
        < input;
type = "text";
id = "snippet";
name = "snippet";
required >
;
for ( = "body" > Blog; body; )
    : /label>
        < textarea;
id = "body";
name = "body";
required > />
    < button > Submit < /button>
    < /form>
    < /div>
    <  % -include("./partials/footer.ejs") %  >
    /body>
    < /html>;
//# sourceMappingURL=create.js.map