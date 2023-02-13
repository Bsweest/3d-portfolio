export default function Transcript(props) {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "white",
        color: "black",
        overflowY: "scroll",
      }}
    >
      <div>
        <form id="uit-sinhvien-tracuu-kqhoctap" acceptCharset="UTF-8">
          <div>
            <center>
              <h1>
                <strong>BẢNG ĐIỂM SINH VIÊN</strong>
              </h1>
            </center>
            <table
              cellPadding={0}
              cellSpacing={0}
              border="1"
              bordercolor="FFFFFF"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>Họ và tên:</td>
                  <td>
                    <strong>Phan Huy Mạnh</strong>
                  </td>
                  <td>Ngày sinh:</td>
                  <td>
                    <strong>27-07-2001</strong>
                  </td>
                  <td>Giới tính:</td>
                  <td>
                    <strong>Nam</strong>
                  </td>
                </tr>
                <tr>
                  <td>Mã SV:</td>
                  <td>
                    <strong>19521828</strong>
                  </td>
                  <td>Lớp sinh hoạt:</td>
                  <td>
                    <strong>PMCL2019.2</strong>
                  </td>
                  <td>Khoa:</td>
                  <td>
                    <strong>CNPM</strong>
                  </td>
                </tr>
                <tr>
                  <td>Bậc đào tạo:</td>
                  <td>
                    <strong>Đại Học</strong>
                  </td>
                  <td>Hệ đào tạo:</td>
                  <td colSpan={3}>
                    <strong>CLC</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              cellPadding={0}
              cellSpacing={0}
              border="1"
              bordercolor="#000000"
              width="100%"
            >
              <tbody>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>&nbsp;Mã HP</th>
                  <th>&nbsp;Tên học phần</th>
                  <th>&nbsp;Tín chỉ</th>
                  <th>&nbsp;Điểm QT</th>
                  <th>&nbsp;Điểm GK</th>
                  <th>&nbsp;Điểm TH</th>
                  <th>&nbsp;Điểm CK</th>
                  <th>&nbsp;Điểm HP</th>
                  <th>&nbsp;Ghi chú</th>
                </tr>
                <tr>
                  <td colSpan={10}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 1 - Năm học 2019-2020{" "}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td align="center" title="ENG01.2019.1.M">
                    ENG01
                  </td>
                  <td>&nbsp;Anh văn 1</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center">Miễn</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="ENG02.2019.1.M">
                    ENG02
                  </td>
                  <td>&nbsp;Anh văn 2</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center">Miễn</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td align="center" title="ENG03.K13.CLC">
                    ENG03
                  </td>
                  <td>&nbsp;Anh văn 3</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 30%">
                    5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 70%">
                    5
                  </td>
                  <td align="center">5</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="IT001.K12.PMCL">
                    IT001
                  </td>
                  <td>&nbsp;Nhập môn lập trình</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 10%">
                    1
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    3
                  </td>
                  <td align="center" title="Trọng số: 30%">
                    6.5
                  </td>
                  <td align="center" title="Trọng số: 40%">
                    8.5
                  </td>
                  <td align="center">6.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">5</td>
                  <td align="center" title="MA003.K12.PMCL">
                    MA003
                  </td>
                  <td>&nbsp;Đại số tuyến tính</td>
                  <td align="center">3</td>
                  <td align="center" title="Trọng số: 20%">
                    8
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    6
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 60%">
                    7
                  </td>
                  <td align="center">7</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">6</td>
                  <td align="center" title="MA006.K12.PMCL">
                    MA006
                  </td>
                  <td>&nbsp;Giải tích</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 20%">
                    8
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    7.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 60%">
                    6
                  </td>
                  <td align="center">6.7</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">7</td>
                  <td align="center" title="PE001.K112">
                    PE001
                  </td>
                  <td>&nbsp;Giáo dục thể chất 1</td>
                  <td align="center"></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 100%">
                    8
                  </td>
                  <td align="center">7.5</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">8</td>
                  <td align="center" title="PH002.K12.PMCL">
                    PH002
                  </td>
                  <td>&nbsp;Nhập môn mạch số</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 15%">
                    3
                  </td>
                  <td align="center" title="Trọng số: 15%">
                    5
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    5.5
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    5.5
                  </td>
                  <td align="center">5.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>19</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>5.93</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={10}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 2 - Năm học 2019-2020{" "}
                    </strong>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#ffbfdf" }}>
                  <td align="center">1</td>
                  <td align="center" title="ENG04.K23.CLC">
                    ENG04
                  </td>
                  <td>&nbsp;Anh văn 4</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 30%">
                    3
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 70%">
                    5.5
                  </td>
                  <td align="center">4.8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="IT002.K22.PMCL">
                    IT002
                  </td>
                  <td>&nbsp;Lập trình hướng đối tượng</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 20%">
                    6
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 30%">
                    7
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    5
                  </td>
                  <td align="center">5.8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr style={{ backgroundColor: "#ffbfdf" }}>
                  <td align="center">3</td>
                  <td align="center" title="IT003.K22.ATCL">
                    IT003
                  </td>
                  <td>&nbsp;Cấu trúc dữ liệu và giải thuật</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 20%">
                    1
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    0
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    0.5
                  </td>
                  <td align="center" title="Trọng số: 40%">
                    5
                  </td>
                  <td align="center">2.3</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="MA004.K22.PMCL">
                    MA004
                  </td>
                  <td>&nbsp;Cấu trúc rời rạc</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 40%">
                    8
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 60%">
                    6
                  </td>
                  <td align="center">6.8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">5</td>
                  <td align="center" title="MA005.K23.MTCL">
                    MA005
                  </td>
                  <td>&nbsp;Xác suất thống kê</td>
                  <td align="center">3</td>
                  <td align="center" title="Trọng số: 40%">
                    0
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 60%">
                    8.5
                  </td>
                  <td align="center">5.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">6</td>
                  <td align="center" title="PE002.K214">
                    PE002
                  </td>
                  <td>&nbsp;Giáo dục thể chất 2</td>
                  <td align="center"></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 100%">
                    8
                  </td>
                  <td align="center">8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>19</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>4.95</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 1 - Năm học 2020-2021{" "}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td align="center" title="IT004.L12.PMCL">
                    IT004
                  </td>
                  <td>&nbsp;Cơ sở dữ liệu</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 20%">
                    7.5
                  </td>
                  <td align="center" title="Trọng số: 30%">
                    8
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    8
                  </td>
                  <td align="center">7.9</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="IT005.L12.PMCL">
                    IT005
                  </td>
                  <td>&nbsp;Nhập môn mạng máy tính</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 25%">
                    7
                  </td>
                  <td align="center" title="Trọng số: 25%">
                    8.5
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    8
                  </td>
                  <td align="center">7.9</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td align="center" title="IT007.L12.PMCL">
                    IT007
                  </td>
                  <td>&nbsp;Hệ điều hành</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 15%">
                    6.5
                  </td>
                  <td align="center" title="Trọng số: 15%">
                    8.5
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    10
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center">8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="SS004.L110.CLC">
                    SS004
                  </td>
                  <td>&nbsp;Kỹ năng nghề nghiệp</td>
                  <td align="center">2</td>
                  <td align="center" title="Trọng số: 20%">
                    8
                  </td>
                  <td align="center" title="Trọng số: 30%">
                    7.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    6.5
                  </td>
                  <td align="center">7.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">5</td>
                  <td align="center" title="SS007.L12">
                    SS007
                  </td>
                  <td>&nbsp;Triết học Mác – Lênin</td>
                  <td align="center">3</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    8.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center">8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>17</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>7.85</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 2 - Năm học 2020-2021{" "}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td align="center" title="SE102.L21.PMCL">
                    SE102
                  </td>
                  <td>&nbsp;Nhập môn phát triển game</td>
                  <td align="center">3</td>
                  <td align="center" title="Trọng số: 50%">
                    0
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    0
                  </td>
                  <td align="center">0</td>
                  <td>&nbsp;(1)</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="SE104.L25.TMCL">
                    SE104
                  </td>
                  <td>&nbsp;Nhập môn Công nghệ phần mềm</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center">7</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td align="center" title="SE114.L22.PMCL">
                    SE114
                  </td>
                  <td>&nbsp;Nhập môn ứng dụng di động</td>
                  <td align="center">3</td>
                  <td align="center" title="Trọng số: 30%">
                    6
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 70%">
                    7.5
                  </td>
                  <td align="center">7.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="SS003.L26">
                    SS003
                  </td>
                  <td>&nbsp;Tư tưởng Hồ Chí Minh</td>
                  <td align="center">2</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center">7.3</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">5</td>
                  <td align="center" title="SS008.L26">
                    SS008
                  </td>
                  <td>&nbsp;Kinh tế chính trị Mác – Lênin</td>
                  <td align="center">2</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    8
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    8
                  </td>
                  <td align="center">8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">6</td>
                  <td align="center" title="SS009.L26">
                    SS009
                  </td>
                  <td>&nbsp;Chủ nghĩa xã hội khoa học</td>
                  <td align="center">2</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    6.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    4
                  </td>
                  <td align="center">5.3</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>16</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>5.66</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 1 - Năm học 2021-2022{" "}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td align="center" title="IT008.M13.PMCL">
                    IT008
                  </td>
                  <td>&nbsp;Lập trình trực quan</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 20%">
                    9
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 30%">
                    10
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    9
                  </td>
                  <td align="center">9.3</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="SE100.M13.PMCL">
                    SE100
                  </td>
                  <td>&nbsp;Phương pháp Phát triển phần mềm hướng đối tượng</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 50%">
                    8
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center">7.8</td>
                  <td>&nbsp;(1)</td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td align="center" title="SE358.M12.PMCL">
                    SE358
                  </td>
                  <td>&nbsp;Quản lý dự án Phát triển Phần mềm</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center">7</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="SS010.M16">
                    SS010
                  </td>
                  <td>&nbsp;Lịch sử Đảng Cộng sản Việt Nam</td>
                  <td align="center">2</td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    4
                  </td>
                  <td align="center">5.8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>14</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>7.71</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 2 - Năm học 2021-2022{" "}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td align="center" title="IT003.M21.HTCL">
                    IT003
                  </td>
                  <td>&nbsp;Cấu trúc dữ liệu và giải thuật</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 20%">
                    7
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    8.5
                  </td>
                  <td align="center" title="Trọng số: 20%">
                    2
                  </td>
                  <td align="center" title="Trọng số: 40%">
                    6.5
                  </td>
                  <td align="center">6.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="SE101.M22.PMCL">
                    SE101
                  </td>
                  <td>&nbsp;Phương pháp mô hình hóa</td>
                  <td align="center">3</td>
                  <td align="center" title="Trọng số: 50%">
                    8.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center">7.8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td align="center" title="SE109.M21.PMCL">
                    SE109
                  </td>
                  <td>&nbsp;Phát triển, vận hành, bảo trì phần mềm</td>
                  <td align="center">3</td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center">7.3</td>
                  <td>&nbsp;(1)</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="SE121.M21.PMCL">
                    SE121
                  </td>
                  <td>&nbsp;Đồ án 1</td>
                  <td align="center">2</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 100%">
                    8.5
                  </td>
                  <td align="center">8.5</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">5</td>
                  <td align="center" title="SE330.M21.PMCL">
                    SE330
                  </td>
                  <td>&nbsp;Ngôn ngữ lập trình Java</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 20%">
                    9
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 30%">
                    5
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    7
                  </td>
                  <td align="center">6.8</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">6</td>
                  <td align="center" title="SE346.M21.PMCL">
                    SE346
                  </td>
                  <td>&nbsp;Lập trình trên thiết bị di động</td>
                  <td align="center">4</td>
                  <td align="center" title="Trọng số: 30%">
                    6
                  </td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title="Trọng số: 70%">
                    7.5
                  </td>
                  <td align="center">7.1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>20</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>7.12</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>
                      &nbsp;&nbsp;&nbsp;Học kỳ 1 - Năm học 2022-2023{" "}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td align="center" title="ENG04.2022.1.M">
                    ENG04
                  </td>
                  <td>&nbsp;Anh văn 4</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center">Miễn</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td align="center" title="ENG05.2022.1.M">
                    ENG05
                  </td>
                  <td>&nbsp;Anh văn 5</td>
                  <td align="center">4</td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center" title=""></td>
                  <td align="center">Miễn</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td align="center" title="SE347.N12.PMCL">
                    SE347
                  </td>
                  <td>&nbsp;Công nghệ Web và ứng dụng</td>
                  <td align="center">4</td>
                  <td align="center" title="">
                    &nbsp;
                  </td>
                  <td align="center" title="">
                    &nbsp;
                  </td>
                  <td align="center" title="Trọng số: 50%">
                    7.5
                  </td>
                  <td align="center" title="">
                    &nbsp;
                  </td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td align="center" title="SS006.N114">
                    SS006
                  </td>
                  <td>&nbsp;Pháp luật đại cương</td>
                  <td align="center">2</td>
                  <td align="center" title="">
                    &nbsp;
                  </td>
                  <td align="center" title="Trọng số: 40%">
                    6.5
                  </td>
                  <td align="center" title="">
                    &nbsp;
                  </td>
                  <td align="center" title="">
                    &nbsp;
                  </td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>
                    &nbsp;<strong>Trung bình học kỳ</strong>
                  </td>
                  <td align="center">
                    <strong>0</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td align="center">
                    <strong>0</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>&nbsp;&nbsp;Số tín chỉ đã học</strong>
                  </td>
                  <td align="center">
                    <strong>97</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>&nbsp;&nbsp;Số tín chỉ tích lũy</strong>
                  </td>
                  <td align="center">
                    <strong>110</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>&nbsp;&nbsp;Điểm trung bình chung</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td align="center">
                    <strong>6.73</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <strong>&nbsp;&nbsp;Điểm trung bình chung tích lũy</strong>
                  </td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td align="center">&nbsp;</td>
                  <td>&nbsp;</td>
                  <td align="center">
                    <strong>6.94</strong>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <div style={{ width: "100%", textAlign: "right" }}>
              (1) Môn giảng dạy bằng tiếng Anh.
            </div>
            <font color="red">
              <strong>
                Lưu ý:<br></br> &nbsp;&nbsp;&nbsp; Các môn có tô màu là những
                môn có học lại hoặc cải thiện (không tính vào điểm trung bình
                chung).
              </strong>
            </font>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}
