<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCidadeRequest;
use App\Http\Requests\UpdateCidadeRequest;
use App\Models\Cidade;
use App\Models\Estado;

class CidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cidades = Cidade::orderBy('nome')->paginate(20);
        return view('cidades.index', ['cidades' => $cidades]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $estados = Estado::orderBy('nome')->get();
        return view('cidades.create', [ 'estados' => $estados]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCidadeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCidadeRequest $request)
    {
        if ( Cidade::create($request->all()) ) {
            session()->flash('mensagem', 'Cidade inserida com sucesso!');
            return redirect()->route('cidades.index');
        } else {
            session()->flash('mensagem-erro', 'Erro na gravação da cidade');
            return back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function show(Cidade $cidade)
    {
        return view('cidades.show', [ 'cidade' => $cidade] );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function edit(Cidade $cidade)
    {
        $estados = Estado::orderBy('nome')->get();
        return view('cidades.edit', 
            [ 
                'estados' => $estados, 
                'cidade' => $cidade
            ]
        );
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCidadeRequest  $request
     * @param  \App\Models\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCidadeRequest $request, Cidade $cidade)
    {
        $cidade->fill($request->all());
        if ( $cidade->save() ) {
            session()->flash('mensagem', 'Cidade atualizada com sucesso!');
            return redirect()->route('cidades.index');
        } else {
            session()->flash('mensagem-erro', 'Erro na gravação da cidade');
            return back()->withInput();
        }        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cidade $cidade)
    {
        if ($cidade->delete()) {
            session()->flash('mensagem', 'Cidade excluída com sucesso!');
            return redirect()->route('cidades.index');
        } else {
            session()->flash('mensagem-erro', 'Erro na exclusão da Cidade!');
            return back()->withInput();
        }
    }
}
