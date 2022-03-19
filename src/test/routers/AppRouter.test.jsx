import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../components/routers/AppRouter";

describe('Pruebas en <AppRouter />', () => {

  
  test('Debe de mostrar el login sino esta autenticado', () => {
    
    const contextValue = {
      user: {
        logged: false
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('h1').text().trim()).toBe( 'Login' );

  })

  test('Debe de mostrar el componente de Marvel si esta autenticado', () => {
    
    const contextValue = {
      user: {
        logged: true,
        name: 'Pepe'
      }
    }
    
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    // console.log(wrapper.html())

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('.navbar').exists()).toBe( true );

  })

})