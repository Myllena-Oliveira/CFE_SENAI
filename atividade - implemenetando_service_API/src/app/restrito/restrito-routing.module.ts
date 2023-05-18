import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from 'src/app/restrito/restrito.component';
import { AtualizaProdutoComponent } from 'src/app/restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from 'src/app/restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from 'src/app/restrito/lista-produto/lista-produto.component';
import { GuardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
    { path: 'restrito', component: RestritoComponent, children:[
        { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [GuardGuard] },
        { path: 'lista', component: ListaProdutoComponent, canActivate: [GuardGuard] },
        { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [GuardGuard] },
    ]},

        { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }

]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }
