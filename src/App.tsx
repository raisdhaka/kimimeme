import { useState } from 'react'

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-3 title"> <img src="img/titleImg.png" className='titleImg' alt="kimi" />KIMI MEME MAKER</h1>
        </div>
        <div className="row my-5">
          <div className="col-sm-4 previewSide py-5">
            <div className="imgholder text-center">
              <img src="img/cat01.png" alt="cat" />

              <button className='btn btn-lg btn-reset mt-4' type='button'>Reset Kimi</button>
              <br />

              <button className='btn btn-lg btn-rm mt-3 me-3' type='button'>Random</button>
              <button className='btn btn-lg btn-dl mt-3' type='button'>Download</button>
            </div>
          </div>
          <div className="col-sm-8 py-5">
            <p>CREATE YOUR KIMI</p>
            <p>Cat</p>
            <div className="row  align-items-center text-center">
              <div className="col-sm-1">
                <img src="img/pre.png" alt="pre" />
              </div>
              <div className="col-sm-2">
                <img src="img/cat001.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/cat002.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/cat003.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/cat004.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/cat005.png" alt="prev" />
              </div>
              <div className="col-sm-1">
                <img src="img/next.png" alt="next" />
              </div>
            </div>
            <p>Hat</p>
            <div className="row  align-items-center text-center">
              <div className="col-sm-1">
                <img src="img/pre.png" alt="pre" />
              </div>
              <div className="col-sm-2">
                <img src="img/hat001.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/hat002.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/hat003.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/hat004.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/hat005.png" alt="prev" />
              </div>

              <div className="col-sm-1">
                <img src="img/next.png" alt="next" />
              </div>
            </div>
            <p>Accessory</p>

            <div className="row  align-items-center text-center">
              <div className="col-sm-1">
                <img src="img/pre.png" alt="pre" />
              </div>
              <div className="col-sm-2">
                <img src="img/acc001.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/acc002.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/acc003.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/acc004.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/acc005.png" alt="prev" />
              </div>
              <div className="col-sm-1">
                <img src="img/next.png" alt="next" />
              </div>
            </div>
            <p>Background</p>
            <div className="row  align-items-center text-center">
              <div className="col-sm-1">
                <img src="img/pre.png" alt="pre" />
              </div>
              <div className="col-sm-2">
                <img src="img/back001.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/back002.png" alt="prev" />
              </div>
              <div className="col-sm-2">
                <img src="img/back003.png" alt="prev" />
              </div>

              <div className="col-sm-1 offset-4">
                <img src="img/next.png" alt="next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
