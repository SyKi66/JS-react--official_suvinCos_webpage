import React from 'react';
import { MDBCol, MDBRow } from "mdbreact";

import InnerPageFrame from "../common/InnerPageFrame";

const certificate_01 = "https://user-images.githubusercontent.com/59393359/77155822-7c129580-6ae1-11ea-821e-74ef00090203.jpg";
const certificate_02 = "https://user-images.githubusercontent.com/59393359/77155823-7cab2c00-6ae1-11ea-9766-730bc4ca367a.jpg";
const certificate_03 = "https://user-images.githubusercontent.com/59393359/77155824-7cab2c00-6ae1-11ea-9513-32a89b7cbe15.jpg";
const certificate_04 = "https://user-images.githubusercontent.com/59393359/77155826-7d43c280-6ae1-11ea-96ed-0dd33fd4d592.jpg";
const certificate_05 = "https://user-images.githubusercontent.com/59393359/77155827-7d43c280-6ae1-11ea-8926-11ca7b60fab8.jpg";
const certificate_06 = "https://user-images.githubusercontent.com/59393359/77155829-7ddc5900-6ae1-11ea-959c-bc2172d6f407.jpg";
const certificate_07 = "https://user-images.githubusercontent.com/59393359/77155831-7ddc5900-6ae1-11ea-84a9-80819b561c2d.jpg";
const certificate_08 = "https://user-images.githubusercontent.com/59393359/77155834-7e74ef80-6ae1-11ea-90d5-34ad6fa78768.jpg";
const certificate_09 = "https://user-images.githubusercontent.com/59393359/77155835-7e74ef80-6ae1-11ea-856d-1d7bf42757d0.jpg";
const certificate_10 = "https://user-images.githubusercontent.com/59393359/77155836-7f0d8600-6ae1-11ea-852c-b54e8fe7a2c5.jpg";
const certificate_11 = "https://user-images.githubusercontent.com/59393359/77155837-7f0d8600-6ae1-11ea-9fde-0a5bd6807bc4.jpg";
const certificate_12 = "https://user-images.githubusercontent.com/59393359/77155838-7fa61c80-6ae1-11ea-8ee5-54dae22c82d6.jpg";

const certificate = "https://user-images.githubusercontent.com/59393359/77155819-7ae16880-6ae1-11ea-8217-e8cdf0b2ff88.jpg";
const dutyfreeStore = "https://user-images.githubusercontent.com/59393359/77156014-d4499780-6ae1-11ea-83bb-85722fd058fc.jpg";
const overseasMarketing = "https://user-images.githubusercontent.com/59393359/77156015-d4e22e00-6ae1-11ea-92d9-9d54aa18e226.jpg";
const diverseDistribution = "https://user-images.githubusercontent.com/59393359/77156013-d3b10100-6ae1-11ea-9a7b-b47da6925a61.jpg";


/*
    일단 그리드 레이아웃으로 나눠서 글쓸부분과 네비부분 나눴고, MDB에서 리스트그룹 가져와서 그리드 100퍼센트주고 크기 조정했음
    그리드는 합해서 가로는 최대 12까지만 되는듯.

    글쓰는 부분도 8:4 비율로 글과 사진으로 그리드 나누었고, 하단부분에는 증명서 2열로 p-1만 줬음



    py-5 로 각 칸들 y축 패딩 넣어주고, border border-light 로 회색 테투리들 주고

    사진들은 z-depth-1로 그림자 주고, display:"flex", alignItems:"center" 로 수직 중앙정렬


    그러고 xs와 sm에서는 size값 12로 넣어서 사이드네비 상단에 배치하고, 사진들 글 오른쪽에서 하단으로 가게끔 배치함

    첫번째 콜롬 특허증때메 컨텐츠가 붕 떠서 md 이상부터만 패딩 없앰 (모바일버전에 구분선때메 나머지 크기는 패딩 붙임)


    메뉴 바꿀때 fade효과 추가해야겠다.

    나눔글꼴 적용하기


    원래 컨테이너에 p-0 주고서 양옆으로 쫙 붙였는데 가로스크롤 생겨서 그냥 없애버림
*/


export default function Competence() {
    return (
        <InnerPageFrame
            title="Business"
            subtitle={["Competence", "R & D", "OEM & ODM"]}
        >

            <div className="h2 py-2">Competence</div>

            <div className="border-top border-light">
                <MDBRow className="pb-5 pb-md-0 ">
                    <MDBCol size="12" md="8" className=" pt-5">
                        <div className="h4">Competitive Technology</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>특허 인증의 경쟁력 있는 기술</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Management with technological background of 30-year R&D expertise</li>
                            <li>Pore shrinking pack with world class patent certified in 2013</li>
                            <li>30년 축적된 R&D에 기반한 기술우선경영</li>
                            <li>2013년 세계유일 특허로 탄생한 모공축소팩</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={certificate} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="border-top border-light">
                <MDBRow className="py-5">
                    <MDBCol size="12" md="8">
                        <div className="h4">Success of duty-free sales</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>면세점 판매로 인정받은 품질</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Sale of main products on duty-free shops from 2009</li>
                            <li>High reputation about quality among foreign customers</li>
                            <li>2009년부터 국내면세점 독점판매</li>
                            <li>품질에 대한 외국들의 좋은 평가</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={dutyfreeStore} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="border-top border-light">
                <MDBRow className="py-5">
                    <MDBCol size="12" md="8">
                        <div className="h4">Overseas Marketing</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>글로벌 판매망 강화</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>Marketing in main cosmetic exhibitions</li>
                            <li>Affiliation of business partnership in main countries</li>
                            <li>주요 화장품 전시회 적극 참가</li>
                            <li>주요국 해외파트너와의 협력 강화</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={overseasMarketing} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="border-top border-light">
                <MDBRow className="py-5">
                    <MDBCol size="12" md="8">
                        <div className="h4">Diverse distribution channel</div>
                        <div className="h5 py-1" style={{ color: "#7f304e" }}><b>국내 유통망 다양화</b></div>
                        <ul className="py-3 border border-light" style={{ backgroundColor: "#f4f4f4" }}>
                            <li>On-line/Open market sales</li>
                            <li>Door to door sale, Home shopping, PB marketing</li>
                            <li>온라인/오픈 마켓 판매망 구축</li>
                            <li>방문판매, 홈쇼핑, 대형유통망 자체브랜드 분야 진출</li>
                        </ul>
                    </MDBCol>
                    <MDBCol size="12" md="4" style={{ display: "flex", alignItems: "center" }}>
                        <img src={diverseDistribution} className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </div>

            <div className="pt-5 border-top border-light">
                <div className="h4">Certificates</div>
                <div className="h5 py-1" style={{ color: "#7f304e" }}><b>특허 인증의 경쟁력 있는 기술</b></div>
                <MDBRow>
                    <MDBCol className="p-1"><img src={certificate_01} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_02} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_03} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_04} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_05} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_06} className="img-fluid border border-light" alt="" /></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="p-1"><img src={certificate_07} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_08} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_09} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_10} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_11} className="img-fluid border border-light" alt="" /></MDBCol>
                    <MDBCol className="p-1"><img src={certificate_12} className="img-fluid border border-light" alt="" /></MDBCol>
                </MDBRow>
            </div>

        </InnerPageFrame>
    );
};