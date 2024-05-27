import React from "react";
import "./Accordian.css";
import $ from "jquery";

$(document).ready(function () {
  var $item = 0,
    $itemNo = $(".heros figure").length;
  function transitionSlide() {
    $item++;
    if ($item > $itemNo - 1) {
      $item = 0;
    }
    $(".heros figure").removeClass("on");
    $(".heros figure").eq($item).addClass("on");
  }
  var $autoTransition = setInterval(transitionSlide, 3500);

  $(".heros figure").click(function () {
    clearInterval($autoTransition);
    $item = $(this).index();
    $(".heros figure").removeClass("on");
    $(".heros figure").eq($item).addClass("on");
    $autoTransition = setInterval(transitionSlide, 3500);
  });
});

const Accordian = () => {
  return (
    <>
      <div id="heros">
        <div className="heros">
          <figure className="on">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutCbjX8VzNYbbQ0cktXwQi3ZYwfes__mzQ_giWdlL63JOM3u0-7mv2HAvuJ4NunsDoCM&usqp=CAU" />
            <div className="overlay">
              <h2 className="h2">JUSTICE</h2>
              <p className="Paragraph">
                The end of law is not to abolish or restrain, but to preserve
                and enlarge freedom. For in all the states of created beings
                capable of law, where there is no law, there is no freedom.
              </p>
            </div>
          </figure>
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="overlay">
              <h2 className="h2">ATTORNEYS</h2>
              <p className="Paragraph">
                The good lawyer is not the man who has an eye to every side and
                angle of contingency, and qualifies all his qualifications, but
                who throws himself on your part so heartily, that he can get you
                out of a scrape.
              </p>
            </div>
          </figure>
          <figure>
            <img
              src="https://assets.telegraphindia.com/telegraph/2020/Oct/1601592848_supreme-court.jpg"
              alt=""
            />
            <div className="overlay">
              <h2 className="h2">CONSTITUTION</h2>
              <p className="Paragraph">
                The Constitution is not an instrument for the government to
                restrain the people, it is an instrument for the people to
                restrain the government — lest it come to dominate our lives and
                interests.
              </p>
            </div>
          </figure>
          <figure>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/147/730/small_2x/judge-gavel-with-justice-lawyers-having-team-meeting-at-law-firm-in-background-concepts-of-law-generative-ai-photo.jpg"
              alt=""
            />
            <div className="overlay">
              <h2 className="h2">JUDICARY</h2>
              <p className="Paragraph">
                The Indian judiciary has been a beacon of hope and has time and
                again upheld the principles of justice, liberty, and equality
                enshrined in our Constitution.
              </p>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Accordian;
