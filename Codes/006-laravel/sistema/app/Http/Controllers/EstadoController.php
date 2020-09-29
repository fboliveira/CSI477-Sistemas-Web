<?php

namespace App\Http\Controllers;

use App\Models\Estado;
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
        $estados = Estado::orderBy('nome')->get();
        return view('estados.index', ['estados' => $estados]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() // method="post" action="store"
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
        //dd($request);

        // $estado = new Estado;
        // $estado->nome = $request->nome;
        // $estado->sigla = $request->sigla;
        // $estado->save();

        Estado::create($request->all());
        session()->flash('mensagem', 'Estado cadastrado com sucesso!');
        return redirect()->route('estados.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function show(Estado $estado)
    {
        return view('estados.show', [ 'estado' => $estado]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function edit(Estado $estado) // exibir o form -> action: update
    {
        return view('estados.edit', [ 'estado' => $estado ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Estado $estado)
    {
        // dd($request->all());
        $estado->fill($request->all());
        $estado->save();

        session()->flash('mensagem', 'Estado atualizado com sucesso!');
        return redirect()->route('estados.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Estado $estado)
    {
        // dd($estado);

        // Validação:
        if ( $estado->cidades->count() > 0 ) {
            session()->flash('mensagem', 'Exclusão não permitida! Existem cidades associadas.');
        } else {
            $estado->delete();
            session()->flash('mensagem', 'Estado excluído com sucesso!');
        }
        return redirect()->route('estados.index');
    }
}
