import React from 'react';

const counterResult = (props) => {
    return (
        <div>
            <ul>
                {props.resultList.map((result) => {
                    return <li key={result.id} onClick={() => props.clicked(result.id)}>{result.val}</li>
                })}

            </ul>
        </div>

    )
}

export default counterResult;