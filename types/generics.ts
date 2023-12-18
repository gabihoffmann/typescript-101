// antes de passar os parametros da função podemos passar os tipos que a função irá trabalhar
// extends define os tipos esperados
// = define o tipo default
function useState<S extends string | number = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// depois de definido não pode ter o tipo alterado
const learnState = useState<string>();

// learnState.setState(123);
learnState.setState("hello");
console.log(learnState.getState());
