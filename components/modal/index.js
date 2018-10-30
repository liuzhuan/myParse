// var MyParse = require("../../myParse/myParse.js");
import MyParse from "../../myParse/myParse.js";

Component({
    props: {
        onClose: function() {}
    },

    data: {

    },

    didMount,
    methods: {
        myParseTagATap,
        onClose,
    }
})

function didMount() {
    const data = "<p>Hello<span style='color:red;'> Modal<span></p><div><a href='https://mini.open.alipay.com/channel/miniIndex.htm'>alipay</a></div>";
    MyParse.myParse("article", "html", data, this);
}

function myParseTagATap(e) {
    const { src } = e.currentTarget.dataset;
    console.log("jump to url:", src);
}

function onClose() {
    this.props.onClose();
}
