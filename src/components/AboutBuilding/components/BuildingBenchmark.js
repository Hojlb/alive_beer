import React from "react";

export default function BuildingBenchmark () {
  return (
    <form className='bldng-bench-form' onSubmit={(e)=>{e.preventDefault()}}>
      <section>
        <label htmlFor = "">Отметка 0.000</label>
        <input placeholder='Абсолютная' type = "text" name = "" id = ""/>
      </section>

      <section>
        <label htmlFor = "">Отметка подошвы фундамента</label>
        <input placeholder='Относительная' type = "text" name = "" id = ""/>
      </section>
      <section>
        <label htmlFor = "">Отметка планировки</label>
        <input placeholder='Относительная' type = "text" name = "" id = ""/>
      </section>

      <section>
        <label htmlFor="">С подпольем</label>
        <input type="radio" value='Есть подполье' name='is-basement'/>
        <label htmlFor="">Без подполья</label>
        <input type="radio" value='Нет подполья' name='is-basement'/>
      </section>

      <section>
        <label htmlFor = "">Отметка пола подвала (техподполья)</label>
        <input placeholder='Относительная' type = "text" name = "" id = ""/>
      </section>



    </form>
  )
}