const Singlecolor=({colorHeader,cardbody1,cardbody2,cardbody3,cardbody4,cardbody5,cardbody6,cardbody7,cardbody8,cardbody9,cardbodytext1,cardbodytext2,cardbodytext3,cardbodytext4,cardbodytext5,cardbodytext6,cardbodytext7,cardbodytext8,cardbodytext9})=>{
    return(
        
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">{colorHeader}</h6>
                </div>
                <div class="card-body">
                    <p class={cardbody1}>{cardbodytext1}</p>
                    <p class={cardbody2}>{cardbodytext2}</p>
                    <p class={cardbody3}>{cardbodytext3}</p>
                    <p class={cardbody4}>{cardbodytext4}</p>
                    <p class={cardbody5}>{cardbodytext5}</p>
                    <p class={cardbody6}>{cardbodytext6}</p>
                    <p class={cardbody7}>{cardbodytext7}</p>
                    <p class={cardbody8}>{cardbodytext8}</p>
                    <p class={cardbody9}>{cardbodytext9}</p>
                </div>
            </div>
       
    )
}
export default Singlecolor