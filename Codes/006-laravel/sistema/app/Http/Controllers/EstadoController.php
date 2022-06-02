<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEstadoRequest;
use App\Http\Requests\UpdateEstadoRequest;
use App\Models\Estado;

class EstadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $estados = Estado::orderBy('nome')->paginate(20);
        return view('estados.index', [ 'estados' => $estados ]);
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
     * @param  \App\Http\Requests\StoreEstadoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEstadoRequest $request)
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
        return view('estados.show', ['estado' => $estado]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function edit(Estado $estado)
    {
        return view('estados.edit', ['estado' => $estado]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEstadoRequest  $request
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEstadoRequest $request, Estado $estado)
    {
        $estado->fill($request->all());
        if ($estado->save()) {
            session()->flash('mensagem', 'Estado atualizado com sucesso!');
            return redirect()->route('estados.show', $estado->id);
        } else {
            session()->flash('mensagem-erro', 'Erro na atualização do Estado!');
            return back()->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Estado  $estado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Estado $estado)
    {

        if ( $estado->cidades->count() > 0 ) {
            session()->flash('mensagem-erro', 'Exclusão não permitida! Existem cidades associadas.');
            return back()->withInput();
        }


        if($estado->delete()) {
            session()->flash('mensagem', 'Estado excluído com sucesso!');
            return redirect()->route('estados.index');
        } else {
            session()->flash('mensagem-erro', 'Erro na exclusão do Estado!');
            return back();
        }
    }
}
