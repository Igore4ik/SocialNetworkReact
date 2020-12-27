import React, {useState} from "react";
import c from "./Paginator.module.css";


const Paginator = (totalUsersCount, pageSize, currentPage, setPage,portionSize=10) => {
    let pages = Math.ceil(totalUsersCount / pageSize);
    let arrOfPages = [];
    for (let i = 1; i <= pages; i++) {
        arrOfPages.push(i);
    }
    let portionCount = Math.ceil(pages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPageOfPortion = (portionNumber - 1) * portionSize + 1;
    let rightPageOfPortion = portionNumber * portionSize;
    return (

        <div className={c.wrapper}>
            {portionNumber >1 && <button onClick={()=>setPortionNumber(portionNumber-1)}>Prev</button>}

            {arrOfPages
                .filter(page=> page>=leftPageOfPortion && page<=rightPageOfPortion)
                .map((el) => {
                return (
                    <span
                        key={el}
                        className={
                            currentPage === el ? c.activePage + " " + c.page : c.page
                        }
                        onClick={() => {
                            setPage(el);
                        }}
                    >
                             {el}
                      </span>
                )
            })}
            {portionNumber < portionCount && <button onClick={()=>setPortionNumber(portionNumber+1)}>Next</button>}
                </div>
                );
            };

            export default Paginator;
