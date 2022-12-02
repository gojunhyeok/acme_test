<!DOCTYPE html>
<html>
<head>
    <title>웹 프로그래밍 실습 과제</title>
    <script>

        var arr = new Array();
        var first = new Array();
        var second = new Array();
        var third = new Array();

        function showArr(arr) {
            for (var i = 0; i < 50; i++) {
                if (i % 10 == 0) {
                    document.write("<br>");
                }
                document.write(arr[i] + "&nbsp;");
            }
        }

        function randArrCreate() {
            var min = 10;
            var max = 500;
            first = new Array();
            second = new Array();

            for (var i = 1; i <= 20; i++) {
                first.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }
            for (var j = 1; j <= 30; j++) {
                second.unshift(Math.floor(Math.random() * (max - min + 1)) + min);
            }

            for (var i = 0; i < 30; i++) {
                first.splice(10+i, 0, second[i]);
            }
        }

        function getMaxMin() {
            showArr(first);
            document.write("<br><br>");
            first.sort(function(a,b){return a-b;});
            document.write("Max: " + first[49] + ", ");
            document.write("Min: " + first[0]);
        }

        function findVal() {

            //third = new Array();

            for (var a = 0; a < 50; a++) {
                third.push(first[a]);
            }

            first.sort(function (a, b) { return a - b; });
            alert(first);

            var x = parseInt(prompt("찾고자 하는 수를 입력하세요."));

            if (first.indexOf(x) == -1) {
                showArr(third);
                document.write("<br><br>");
                document.write("찾고자 하는 위치: " + "&nbsp;");
                document.write("없습니다.");
            }
            else {
                showArr(third);
                document.write("<br><br>");
                document.write("찾고자 하는 위치: " + "&nbsp;");
                for (var i = 0; i < 50; i++) {
                    if (x == third[i]) {
                        document.write(i + "&nbsp;");
                    }
                }
            }
        }

    </script>
</head>
<body>
    <fieldset>
        <legend>
            배열 함수 다루기
        </legend>
        <input type="button" value="랜덤배열생성" onclick="randArrCreate();" /><br />
        <input type="button" value="최대최소" onclick="getMaxMin();" />
        <input type="button" value="원소찾기" onclick="findVal();" />
    </fieldset>
</body>
</html>