<?php

namespace App\Http\Controllers;

use App\Estado;
use Illuminate\Http\Request;

class EstadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Model -> recuperação dos dados
        $estados = Estado::all();
        // View -> apresentar
        return view('estados.index')
                ->with('estados', $estados);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('estados.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request->all());

        // Validação - check up
        // Ok?

        // Gravar
        //return ($request->nome);
        //return ($request->input('nome'));

        // Opção 01:
        // $estado = new Estado;
        // $estado->nome = $request->nome;
        // $estado->sigla = $request->sigla;
        //
        // $estado->save();

        // Opção 02:
        Estado::create($request->all());

        // Mensagem de sucesso:
        // -- Flash
        // mensagem -> campo
        session()->flash('mensagem', 'Estado inserido com sucesso!');

        //return redirect('/estados');
        return redirect()->route('estados.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function show(Estado $estado)
    {
        // $id <-
        // $estado = Estado::find($id)
        return view('estados.show')
            ->with('estado', $estado);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function edit(Estado $estado)
    {
        return view('estados.edit')
            ->with('estado', $estado);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Estado $estado)
    {
        // Validações ->

        // Opção 01:
        // $estado->nome = $request->nome

        // Opção 02:
        $estado->fill($request->all());

        // Para ambas as opções:
        $estado->save();

        session()->flash('mensagem', 'Estado atualizado com sucesso!');

        return redirect()->route('estados.show', $estado->id);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Estado $estado)
    {
        // Validações ->
        // -- chave estrangeira

        // Excluir o estado
        $estado->delete();
        session()->flash('mensagem', 'Estado excluído com sucesso!');

        return redirect()->route('estados.index');

    }
}
