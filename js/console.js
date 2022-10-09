if (window.console) {
    Function.prototype.makeMulti = function () {
      let l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /*

███╗   ███╗██╗   ██╗ ██████╗██████╗ ███████╗███╗   ██╗
████╗ ████║╚██╗ ██╔╝██╔════╝██╔══██╗██╔════╝████╗  ██║
██╔████╔██║ ╚████╔╝ ██║     ██████╔╝█████╗  ██╔██╗ ██║
██║╚██╔╝██║  ╚██╔╝  ██║     ██╔═══╝ ██╔══╝  ██║╚██╗██║
██║ ╚═╝ ██║   ██║   ╚██████╗██║     ███████╗██║ ╚████║
╚═╝     ╚═╝   ╚═╝    ╚═════╝╚═╝     ╚══════╝╚═╝  ╚═══╝

*/
    };
    console.log(string.makeMulti());
    console.log("欢迎访问 %cMycpenの学习笔记", "color:#5ca1ff;font-weight:bold");
  }

