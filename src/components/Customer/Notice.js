import React from "react";

import InnerPageFrame from "../common/InnerPageFrame";

import Markdown from "react-markdown";

import { HashRouter, Route, Link, Switch } from "react-router-dom";



/*
    posts 폴더 전체를 임포트 시켜서 각 md파일의 내용을 fetch 이용해서 가져와서 state의 posts 어레이에 저장함
    그후 render에서 posts 어레이 이용해서 규격에 넣어서 화면상에 출력
    escapeHTML은 false로 두면 html 사용 가능해짐
    댓글 디스커스 쓸수있게 해야겠다.
    front matter는 아래형식에 맞춰서 date와 title 집어넣어줘야됨(순서는 상관없음). 띄어쓰기와 오타 주의 글의 시작은 front matter 와 한칸 띄워서 시작하기
    비동기에 있어서 isLoading 은 필수, front matter에 disqus 추가할지 정하는거추가

    퍼블리시 하고나서 md파일은 로컬에서 안불러지는데 막상 txt는 겁나잘되네
*/


/*  마크다운 front matter 형식
    ---
    date: "2020-03-12"
    title: "제목입니다."
    ---
    여기서부터 글 시작
*/

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../../posts/', false, /\.md$/)).sort().reverse();
 
export default class Notice extends React.Component {

    state = {
        isLoading: true,
        posts: []
    }




    // front matter 뽑아서 (날짜, 타이틀, 내용) 객체로 리턴해주는 함수
    sliceFrontMatter = (text, index) => {
        const parsedText = text.substring(text.indexOf("---")+5, text.indexOf("---", 3)-2);
        
        const date = parsedText.substring(parsedText.indexOf('date: "')+7, parsedText.indexOf('"' , parsedText.indexOf('date: "')+10) );
        const title = parsedText.substring(parsedText.indexOf('title: "')+8, parsedText.indexOf('"' , parsedText.indexOf('title: "')+10) );
        const mainText = text.substr(text.indexOf("---", 3)+5);

        return { index, date, title, mainText }
    }



    async componentDidMount() {
        const posts = await Promise.all(
            markdownFiles.map(
                (file, i) => fetch(file).then(
                    res => (res.text()).then(result => this.sliceFrontMatter(result, i))
                    )
                )
        ).catch((err) => console.error(err));

        this.setState({ posts, isLoading: false });
    }




    render() {
        const { posts, isLoading } = this.state;

        return (
            <InnerPageFrame
                title="Customer"
                subtitle={["Notice", "Comments"]}
            >


                <div className="h2 py-2">Notice</div>
                
                {isLoading ? (
                    <div>데이터 로딩중</div>
                    ) : (




                        <div className="border-top border-light pt-5">


                            {posts.map(post => {
                                return (
                                    <div>
                                        
                                        <Link to={`/Notice/${post.index}`}>{post.title}</Link>

                                    </div>
                                );
                            })}







                        </div>





                ) }


            </InnerPageFrame>
        );
    }
}