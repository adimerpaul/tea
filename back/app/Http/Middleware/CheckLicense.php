<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckLicense
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $activationDate = config('license.activation_date');
        $expirationDate = Carbon::parse($activationDate)->addDays(90);

        if (Carbon::now()->greaterThan($expirationDate)) {
            return response('La licencia ha expirado. Por favor, contacta al administrador.', 403);
        }

        return $next($request);
    }
}
