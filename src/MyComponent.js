import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    document.documentElement.classList.replace(
      'adaptive',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  }, []);

  return (
    <div id="root">
      <div className="yIDCqA">
        <main className="_2LJfjg">
          <div style={{ height: '100%', width: '100%' }}>
            <section id="PBpCSVJGW42D23GW">
              <div>
                <div className="onhyOQ" style={{ width: '342px', height: '1252px', alignItems: 'center' }}>
                  <div className="twbtjQ">
                    <div className="GDnEHQ" style={{ width: '342px', height: '1252px', backgroundColor: 'rgb(255, 255, 255)' }}>
                      <div className="o2Yl2g">
                        <div className="_mXnjA" lang="es-US" style={{ width: '342px', height: '1252px' }}>
                          <div className="_6t4CHA">
                            <div className="a26Xuw">
                              <div className="fbzKiw" style={{ background: 'rgb(255, 255, 255)' }}></div>
                            </div>
                          </div>
                          <div style={{ position: 'absolute', top: '34.2px', left: '34.2px', width: '273.6px', height: '1183.6px' }}></div>
                          <div className="DF_utQ _0xkaeQ" style={{ width: '311.494px', height: '41.8954px', transform: 'translate(13.68px, 299.101px)' }}>
                            <div className="Zp7NQw">
                              <div className="a26Xuw">
                                <div className="PcHy7w">
                                  <div className="uk_25A Ty61NA">
                                    <div className="Izwocg" style={{ width: '316.693px', height: '41.8954px', transform: 'translate(-5.19959px, 0px) rotate(0deg)' }}>
                                      <img className="_7_i_XA" crossOrigin="anonymous" src="https://teechernobyl.my.canva.site/mockup-interface/media/80ba90cf8a956e1308fa9cbf8c33d9db.png" draggable="false" alt="example" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div style={{ position: 'absolute', top: '0px', left: '0px', transformOrigin: '0px 0px', height: '41.8954px', width: '311.494px', pointerEvents: 'none', transform: 'scale(1)' }}></div>
                            </div>
                          </div>
                          {/* Add more elements as needed */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyComponent;
