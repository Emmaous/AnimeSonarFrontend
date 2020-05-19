export default () => {
    return <>
         <div>
                <input type="number" id="tentacles" name="tentacles"
               min="1" max="13" step="1"></input>
               <label>/13</label>
        </div>
<style jsx>{`
 div {
    display: flex;
    background: orange;
    border-radius: 50px;
}
input {
    width: 50%;
    border: none;
    border: 0.5px solid orange;
    border-radius: 50px 0 0 50px;
}
label {
    color: #fff;
    text-align: right;
    font-weight: 900;
    width: 45%;
    height: 100%;
 }
`}</style>
    </>
}