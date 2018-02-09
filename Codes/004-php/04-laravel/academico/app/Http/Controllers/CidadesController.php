<?php

namespace App\Http\Controllers;

use App\Cidade;
use App\Estado;
use Illuminate\Http\Request;

class CidadesController extends Controller
{

    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cidades = Cidade::orderBy('nome')->get();
        return view('cidades.index')->with('cidades', $cidades);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $estados = Estado::orderBy('nome')->get();
        return view('cidades.create')->with('estados', $estados);
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
        $cidade = new Cidade;
        // $cidade->nome = $request->nome;
        // $cidade->estado_id = $request->estado_id;
        // $cidade->save();
        Cidade::create($request->all());
        $request->session()->flash('mensagem', 'Cidade inserida com sucesso!');
        return redirect('/cidades');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function show(Cidade $cidade)
    {
        return view('cidades.show')
            ->with('cidade', $cidade);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function edit(Cidade $cidade)
    {
        $estados = Estado::orderBy('nome')->get();
        return view('cidades.edit')
            ->with('cidade', $cidade)
            ->with('estados', $estados);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cidade $cidade)
    {
        //dd($request->all());
        $cidade->nome = $request->nome;
        $cidade->estado_id = $request->estado_id;
        $cidade->save();
        $request->session()->flash('mensagem', 'Cidade atualizada com sucesso!');
        return redirect('/cidades');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Cidade  $cidade
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cidade $cidade)
    {
        //dd($cidade);
        $cidade->delete();
        session()->flash('mensagem', 'Cidade excluída com sucesso!');
        session()->flash('tipo', 'alert-danger');
        return redirect('/cidades');
    }
}
