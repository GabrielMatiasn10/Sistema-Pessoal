import * as C from './styles';  

export const TableArea = () => {
    return (
        <C.Table>
        <thead>
            <tr>
            <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
            <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
            <C.TableHeadColumn>Título</C.TableHeadColumn>
            <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>15/09/2021</td>
            <td>Alimentação</td>
            <td>McDonalds</td>
            <td>R$ 25,00</td>
            </tr>
            <tr>
            <td>15/09/2021</td>
            <td>Alimentação</td>
            <td>Burger King</td>
            <td>R$ 30,00</td>
            </tr>
            <tr>
            <td>15/09/2021</td>
            <td>Alimentação</td>
            <td>Subway</td>
            <td>R$ 20,00</td>
            </tr>
        </tbody>
        </C.Table>
    )
    }